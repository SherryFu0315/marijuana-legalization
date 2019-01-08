'use strict';

const fs = require('fs');
const request = require('request');

request('https://bot-signal-2.firebaseio.com/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const importedJSON = JSON.parse(body);
    const formattedData = format(importedJSON)

    fs.writeFileSync('formatted.json', JSON.stringify(formattedData, null, 2));

    console.info('Formatted!')
  }
})

function format(data) {
  return Object.entries(data).map(([key, value]) => {
    const UGC = []
    const Interactions = []

    Object.entries((value.replies || {})).forEach(([replyId, repliesItem]) => {
      Object.values(repliesItem.content).forEach((replyContent, i) => {
        const type = i === 0 ? 'New' : 'Edit'
        if (!repliesItem.commentId && !repliesItem.replyId) {
          UGC.push({
            ComID: replyId,
            ComContent: replyContent,
            ComType: type,
          })
        } else if (!repliesItem.replyId) {
          const newEntry = {
            RepId: replyId,
            RepContent: replyContent,
            RepType: type,
          }

          let foundInteraction = Interactions.find((interaction) => interaction.ECID === repliesItem.commentId)

          if (foundInteraction) {
            if (foundInteraction.Reply) {
              foundInteraction.Reply.push(newEntry)
            } else {
              foundInteraction.Reply = [newEntry]
            }
          } else {
            Interactions.push({
              ECID: repliesItem.commentId,
              Reply: [newEntry],
            })
          }
        } else {
          const newEntry = {
            SubRepId: replyId,
            SubRepContent: replyContent,
            SubRepType: type,
          }

          let foundInteractionItem = Interactions.find((interaction) => interaction.ECID === repliesItem.commentId)
          let foundRepliesItem = foundInteractionItem && foundInteractionItem.Replies && foundInteractionItem.Replies.find((reply) => reply.ERID === repliesItem.replyId)

          if (foundInteractionItem && foundRepliesItem) {
            if (foundRepliesItem.SubReply) {
              const length = Object.keys(foundRepliesItem.SubReply).length
              foundRepliesItem.SubReply[length] = newEntry
            } else {
              foundRepliesItem.SubReply[0] = newEntry
            }
          } else if (foundInteractionItem) {
            if (!foundInteractionItem.Replies) {
              foundInteractionItem.Replies = []
            }
            
            foundInteractionItem.Replies.push({
              ERID: repliesItem.replyId,
              SubReply: {
                0: newEntry,
              },
            })
          } else {
            Interactions.push({
              ECID: repliesItem.commentId,
              Replies: [{
                ERID: repliesItem.replyId,
                SubReply: {
                  0: newEntry,
                },
              }],
            })
          }
        }
      })
    })

    Object.entries((value.reactions || {})).forEach(([commentId, reaction]) => {
      let foundInteractionItem = Interactions.find((interaction) => interaction.ECID === commentId)

      if (foundInteractionItem) {
        if (reaction.like !== undefined) {
          foundInteractionItem.Like = !!reaction.like
        }
        if (reaction.reported !== undefined || reaction.attitude !== undefined) {
          foundInteractionItem.Moderation = reaction.reported ? 3 : reaction.attitude ? 1 : 2
        }
        if (reaction.viewReplies !== undefined) {
          foundInteractionItem.ViewReplies = !!reaction.viewReplies
        }

        if (!Interactions.Replies) {
          Interactions.Replies = []
        }
        Object.entries(reaction.replies || {}).forEach(([replyId, replyReaction]) => {
          const foundReplyItem = Interactions.Replies.find((item) => item.ERID === replyId)

          if (foundReplyItem) {
            foundReplyItem.Like = !!replyReaction.like
            foundReplyItem.reported = !!replyReaction.reported
          } else {
            Interactions.Replies.push({
              ERID: replyId,
              Like: !!replyReaction.like,
              reported: !!replyReaction.reported,
            })
          }
        })
      } else {
        const newEntry = {
          ECID: commentId,
        }
        if (reaction.like !== undefined) {
          newEntry.Like = !!reaction.like
        }
        if (reaction.reported !== undefined || reaction.attitude !== undefined) {
          newEntry.Moderation = reaction.reported ? 3 : reaction.attitude ? 1 : 2
        }
        if (reaction.viewReplies !== undefined) {
          newEntry.ViewReplies = !!reaction.viewReplies
        }

        Object.entries(reaction.replies || {}).forEach(([replyId, replyReaction]) => {
          if (newEntry.Replies === undefined) {
            newEntry.Replies = []
          }

          newEntry.Replies.push({
            ERID: replyId,
            Like: !!replyReaction.like,
            reported: !!replyReaction.reported,
          })
        })

        if (newEntry.Replies !== undefined || newEntry.Like !== undefined || newEntry.Moderation !== undefined || newEntry.ViewReplies !== undefined) {
          Interactions.push(newEntry)
        }
      }
    })

    return {
      UID: Buffer.from(key, 'base64').toString(),
      Condition: value.condition,
      UGC,
      Interactions,
    }
  })
}

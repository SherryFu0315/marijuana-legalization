export default {
  study: undefined,
  condition: undefined,
  name: undefined,
  user: undefined,
  comment: '',
  finalComment: '',
  initialize({ study, condition, name }) {
    this.study = study
    this.condition = condition
    this.name = name
  },
}

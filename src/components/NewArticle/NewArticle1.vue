<template>
  <article>
    <section>
      <h1>
        Did you notice the errors of the bot? Why should we care about the
        performance of the bot and its errors?
      </h1>
      <p>
        Over-reliance on technology can result in serious consequences. Even
        though automation (such as auto-piloting systems, medical diagnosis
        systems, grammar checkers, and comment moderation bots) is increasingly
        used in our society, they are still not perfect. Thus, it is essential
        for end-users to closely monitor the automation's performance and
        correct its errors.
      </p>
      <h3>
        Example 1: Over-reliance on technology and medical incidents (Grissinger
        2019)
      </h3>
      <p>
        The implementation of information technology in medication-use systems
        is widely accepted as a way to reduce adverse drug events by decreasing
        human error, such as computerized order-entry systems, clinical decision
        support systems, and robotic dispensing. However, technology can
        occasionally malfunction, misdirect users, or give incorrect information
        or recommendations that results in users changing a previously correct
        decision or following a pathway that leads to error. Over-reliance on
        technology can result in serious consequences for patients. See below
        for a real medical incident:
      </p>
      <p>
        An elderly patient was admitted to the hospital with new-onset seizures.
        Admission orders included the anticonvulsant phenytoin (handwritten with
        the brand name DILANTIN) 300 mg orally every evening. Before the
        pharmacy closed, a staff member entered the order into the computer so
        the medication could be obtained overnight from an ADC in the patient
        care unit. Medication selection for order entry was performed by typing
        the first three letters of the drug's name (“dil,” in this case) then
        choosing the desired name from a drop-down list, comprised of both
        generic and brand names. The staff member was interrupted while entering
        the order and, upon resuming the task, selected dilTIAZem 300 mg instead
        of Dilantin 300 mg. On the patient-care unit, the order for Dilantin had
        been correctly transcribed by hand onto a daily computer-generated
        medication administration record (MAR), which was verified against the
        prescriber's order and co-signed by a nurse.
        <span style="color: red">
          The nurse who obtained the medication from the unit's ADC noticed the
          discrepancy between the MAR and the ADC display, but accepted the
          information on the ADC screen as correct.
        </span>
        Thus, the patient received a dose of long-acting dilTIAZem 300 mg
        instead of the Dilantin 300 mg as ordered. The error was caught the next
        morning when the patient exhibited significant hypotension and
        bradycardia.
      </p>
      <h3>
        Example 2: Pitt study fails MS Word grammar, spell checker (Jorgensen
        2003)
      </h3>
      <p>
        <span style="color: red">
          Blindly following the advice of Microsoft Word's spelling and grammar
          check could worsen the quality of writing, a University of Pittsburgh
          study shows.
        </span>
        In the study, 33 undergraduates proofread a business letter — some using
        Word's spelling and grammar check, and some with the software
        deactivated. Without using the software, those with higher verbal SAT
        scores made an average of five errors, compared to 16 errors when they
        ran spelling and grammar check. Lower scorers made an average of 17
        errors when using the software, compared with 12.3 errors without it.
      </p>
      <h3>
        Example 3: Aviation Crash: how computers are setting us up for disaster
        (Thomas 2021)
      </h3>
      <p>
        In 1995, based on Royal Air Force Institute of Aviation Medicine data,
        Dr. Marianne Rudisill surveyed more than 1,000 pilots from 20 airlines
        and aircraft manufacturers about pilots' attitudes and experience with
        flight deck automation. He found the general consensus was that “safety
        is increased with automation, but automation may lend a false sense of
        security, particularly with inexperienced pilots. Very concerning was
        that pilots reported that there was a higher sense of “insecurity”
        during an automation failure and a general temptation to ignore raw
        information and “follow the green/magenta line.” The most worrying
        aspect was that pilots said their colleagues were “becoming complacent
        and relied too much on automation but that was often because airline
        SOPs mandated reliance on automation.”
      </p>
      <p>
        A tragic example is the loss of the Atlas Air Boeing 767-300 at Trinity
        Bay Texas in February 2019 where the NTSB found that the probable cause
        of this accident was the inappropriate response by the first officer as
        the pilot flying to inadvertent activation of the go-around mode, which
        led to his spatial disorientation and nose-down control inputs that
        placed the airplane in a steep descent from which the crew did not
        recover. It added that
        <span style="color: red"
          >contributing to the accident was the captain's failure to adequately
          monitor the airplane's flight path and assume positive control of the
          airplane to effectively intervene</span
        >. Also contributing were systemic deficiencies in the aviation
        industry's selection and performance measurement practices, which failed
        to address the first officer's aptitude-related deficiencies and
        maladaptive stress response.
      </p>
    </section>
  </article>
</template>

<script>
import emitter from "../../emitter";

export default {
  name: "article-1",
  mounted() {
    emitter.emit("step-finished", {
      type: "new-article",
    });
  },
};
</script>

<style scoped>
article {
  font-family: lulo-clean-w01-one-bold, sans-serif;
  color: #605e5e;
  font-size: 17px;
  line-height: 1.4em;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section {
  max-width: 52rem;
}
h1 {
  font-size: 1.8em;
  text-align: left;
}
h2 {
  text-align: left;
}
p {
  line-height: 1.2;
}
</style>

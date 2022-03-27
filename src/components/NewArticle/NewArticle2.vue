<template>
  <article>
    <section>
      <h1>
        Related news: Legalizing weed in Pennsylvania faces complicated demands
      </h1>
      <p>
        At a West Philadelphia hearing, state lawmakers, who are working on a
        recreational marijuana legalization bill, heard about the impact of
        cannabis criminalization on communities of color. (Brubaker 2022)
      </p>
      <p>
        Pennsylvania lawmakers researching a bill to legalize recreational
        marijuana received a barrage of information Tuesday during a spirited,
        two-hour hearing in West Philadelphia.
      </p>
      <p>
        They heard testimony espousing their instituting automatic and
        retroactive mass expungement of cannabis convictions and keeping the
        state's “white cartel” of medical marijuana firms' executives from
        taking over the recreational market. And there were calls to just
        legalize it already — from a medical marijuana patient who said he spent
        time in jail partly because of marijuana charges.
      </p>
      <p>
        The House Democratic Policy Committee hearing, convened by State Rep.
        Amen Brown, and other meetings held in Harrisburg recently by the
        Republican-led Senate Law and Justice Committee highlighted
        <span style="color: red"
          >the multitude of demands that lawmakers have to satisfy — criminal
          and economic justice, work-related and driver safety, and more — to
          get a legalization bill passed.</span
        >
      </p>
      <p>
        Brown, a West Philadelphia Democrat, said after the hearing that the
        bill he is proposing with State Sen. Mike Regan, a Republican from
        central Pennsylvania who attended Tuesday's hearing in Philadelphia,
        solves many of those concerns. It's uncertain when they will introduce
        that legislation or whether it stands any chance in the state House of
        Representatives, where Republican leaders remain steadfastly opposed to
        legalization.
      </p>
      <p>
        Pennsylvania legalized medical marijuana in 2016 and made it available
        to patients two years later.
        <span style="color: red"
          >But thousands of Pennsylvanians are still suffering from the impact
          of cannabis arrests, causing problems with their employment, housing,
          health, and education</span
        >, said Andrea Lindsay, lead investigator and mitigation specialist at
        the nonprofit Philadelphia Lawyers for Social Equity. That is why mass
        expungement is necessary, she said.
      </p>
      <p>
        Lester Hollis, a Black cannabis entrepreneur, in 2016 and 2017 helped
        what he described as an “African American-owned, African
        American-operated” company apply for a license to be a grower and a
        processor in Chester. The application failed because of how the state
        awarded points for diversity, he said.
      </p>
      <p>
        “We now have a cartel of multistate operators who make nice gestures and
        say nice things, but the reality is that communities of color have not
        benefited by the rollout of this industry,” Hollis said. “It's just rich
        white folks getting richer. That's been a failure, as I see it.”
      </p>
      <p>
        <span style="color: red">
          Community activist Isaac “Ikey Raw” Gardner told of his experiences
          with drug charges — a misdemeanor for cocaine and a felony for
          marijuana — and finally going to federal prison after being arrested
          for gun possession.</span
        >
      </p>
      <p>
        But Gardner also spoke as a medical marijuana patient, pulling out
        packages of weed to show the lawmakers and gesticulating with his phone
        to show how he could text his medical marijuana dispensary right there
        and pick up his order later in the afternoon, just like a drug deal.
      </p>
      <p>
        It seems crazy to him: “Why are we even here? Why isn't marijuana
        already legalized and regulated?”
      </p>
    </section>
  </article>
</template>

<script>
import emitter from "../../emitter";

export default {
  name: "article-2",
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

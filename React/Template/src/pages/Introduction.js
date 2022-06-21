import React from "react";

import {
  Section,
  Block,
  Blockquote,
  LearningGoals,
  Banner,
  List,
  Image,
  LearningSkillsHabits,
  Thematic_Vocabulary,
} from "../Components/index";
const Introduction = () => {
  return (
    <div className="Course-Content">
      <Section>
        <Blockquote text="How do the literary devices found in narration (e.g., plot, character, conflict, setting, etc.) help properly structure a story in order to allow for a deeper understanding?" />
      </Section>
      <Section type="grey">
        <Image
          img="assets/Module1/img/01/00-00.jpg"
          alt="A series of 30 words of different sizes and colours that are put 
			together in a way that forms the shape of a cloud."
          position="right"
        >
          <p>
            The game “Two Truths and a Lie” is a storytelling activity in which
            people share short stories about themselves. Two of the stories are
            truthful, while the third is a lie. This game shows how good
            storytelling skills can be used as a means to entertain and relate
            information about an event. In this challenge, you will learn about
            the structure of stories in order to become an expert storyteller
            yourself.
          </p>
          <p>
            In the final evaluation of this module, you will write your own
            short story.
          </p>
        </Image>
      </Section>
      <Section>
        <LearningGoals
          goals={[
            `I understand how a story is built and appropriate the different elements that are imperative to the analysis of a narrative`,
            `I identify how an author is influenced by their surroundings and culture when writing a story.`,
            `I enrich my vocabulary by learning the terms and words recommended in the module.`,
            `I show my knowledge of the vocabulary by applying it to a story.`,
          ]}
        />
        <LearningSkillsHabits
          skills={[`Independent work`]}
          habits={[
            `I  work on the required assignments without reminders to submit the work on time.`,
          ]}
        />
      </Section>
      <Section type="Grey">
        <Thematic_Vocabulary
          title={`Thematic Vocabulary for This Challenge`}
          text={[
            `You will discover the following words or expressions during your challenge. 
				  Make sure to apply reading strategies to develop an understanding of these words.`,
          ]}
          list={[
            `literary devices`,
            `character`,
            `plot`,
            `novel`,
            `setting `,
            `protagonist`,
          ]}
        />
      </Section>
    </div>
  );
};

export default Introduction;

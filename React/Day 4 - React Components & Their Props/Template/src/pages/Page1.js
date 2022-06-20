import React from "react";

import {
  Audio,
  Section,
  Block,
  Blockquote,
  Button,
  LearningGoals,
  Banner,
  Table,
  Icons,
  List,
  DynamicBlock,
  Text,
  Image,
  Tab,
  TabItem,
  Accordion,
  LearningSkillsHabits,
  Thematic_Vocabulary,
  AccordionItem,
  Carousel,
  CarouselItem,
  Submit_Work,
  Remember,
  Discussion_Forum,
} from "../Components/index";
import {
  DragDropMatching,
  ImageHotspots,
  MultipleChoiceCheckbox,
  MultipleChoiceComponent,
  Sorting,
  Tooltip,
  Flowchart,
} from "component-library/src";

const Page1 = () => {
  return (
    <div className="Course-Content">
      <div className="Block White">
        <h3>Description des modules 20 pt</h3>
        <h4>MODULE 1 : 18 PT</h4>
        <h5>
          Ajouter le titre du module 16 pt{" "}
          <span>
            <em>[durée] h </em>
          </span>
        </h5>
      </div>

      <h1 style={{marginTop: "100px"}}>Page Banners</h1>
      <div id="Page Banners">
        <Section>
          <Banner
            heading={"Brainstorm: Words Related to Stories"}
            subheading={"Stories are part of the human experience"}
          />
        </Section>
        <Section>
          <Banner
            heading={"Brainstorm: Words Related to Stories"}
            subheading={"Stories are part of the human experience"}
            image={"assets/Module1/img/01/sample.png"}
          />
        </Section>
        <Section>
          <Banner
            subheading={"Activité"}
            text={
              "Réalise l’activité suivante pour mettre tes connaissances à l’épreuve!"
            }
            type={"activity"}
          />
          <Block type="Column-2">
            <Text text="Pour compléter cette tâche, tu auras besoin de :" />
            <List
              type="small"
              list={[
                `un logiciel de traitement de texte`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
          </Block>
        </Section>
        <Section>
          <Banner
            heading={"La tâche de consolidation"}
            text={
              "C’est maintenant le moment de mettre tes connaissances en pratique! Réalise la tâche suivante et soumets ton travail à ton enseignante ou ton enseignant."
            }
            type={"consolidation"}
          />
        </Section>
        <Section>
          <Banner
            heading={"Pour aller plus loin"}
            subheading={"Aimerais-tu en apprendre davantage?"}
            type={"learn-more"}
            text={
              "Les contenus supplémentaires qui suivent te permettront d’aller plus loin dans ton exploration du sujet."
            }
          />
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Blockquotes</h1>
      <div id="Blockquotes">
        {/* Blockquotes */}
        <Section>
          <Blockquote
            text={
              "How do the literary devices found in narration (e.g., plot, character, conflict, setting, etc.) help properly structure a story in order to allow for a deeper understanding?"
            }
          />
        </Section>
        <Section>
          <Blockquote
            text={
              "How do the literary devices found in narration (e.g., plot, character, conflict, setting, etc.) help properly structure a story in order to allow for a deeper understanding?"
            }
            type={"small"}
          />
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Text Blocks / Variations</h1>
      <div id="Text Blocks / Variations">
        {/* Text  */}
        <Section>
          <Block>
            <h1 className="Text">Hello</h1>
            <Block>
              <List type="alphabetic" list={["Hello", "Hello"]} />
            </Block>
          </Block>
          <Block>
            <Text
              type="h1"
              text={[
                `Here are three websites that could help you build your word cloud`,
              ]}
            />
            <Text
              type="h2"
              text={[
                `Here are three websites that could help you build your word cloud`,
              ]}
            />
            <Text
              type="h3"
              text={[
                `Here are three websites that could help you build your word cloud`,
              ]}
            />
            <Text
              type="h4"
              text={[
                `Here are three websites that could help you build your word cloud`,
              ]}
            />
            <Text
              text={[
                `Here are three websites that could help you build your word cloud`,
              ]}
              type={"heading"}
            />
            <Text
              text={[
                `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
              ]}
              type={"italic"}
            />
            <Icons text={[`1`]} type={"number"} />
          </Block>
        </Section>
        {/* Text 2 Column*/}
        <Section>
          <Block type="Column-2">
            <div>
              <Text
                text={[
                  `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
                ]}
              />
            </div>
            <div>
              <Text
                text={[
                  `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
                ]}
              />
            </div>
          </Block>
        </Section>
        {/* Text 3 Column*/}
        <Section>
          <Block type="Column-3">
            <Text
              text={[
                `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
              ]}
            />
            <Text
              text={[
                `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
              ]}
            />
            <Text
              text={[
                `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
              ]}
            />
          </Block>
        </Section>
        {/* List*/}
        <Section>
          <Block>
            <Text
              text={[
                `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
              ]}
            />
            <List
              indent="true"
              type={"large"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction grammaticale (p. ex., Antidote) un logiciel de correction grammaticale (p. ex., Antidote)`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
            <Text
              text={[
                `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
              ]}
            />
            <List
              indent="true"
              type={"small"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction grammaticale (p. ex., Antidote) un logiciel de correction grammaticale (p. ex., Antidote)`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
            <List
              indent="true"
              type={"sub"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction grammaticale (p. ex., Antidote) un logiciel de correction grammaticale (p. ex., Antidote)`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
            <List
              indent="false"
              type={"alphabetic"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction grammaticale (p. ex., Antidote) un logiciel de correction grammaticale (p. ex., Antidote)`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
            <List
              indent="true"
              type={"numeric"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction grammaticale (p. ex., Antidote) un logiciel de correction grammaticale (p. ex., Antidote)`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
          </Block>
        </Section>
        <Section>
          <Block>
            <Text text="Hello" />
          </Block>
        </Section>
        {/* Text 3 Column + List* */}
        <Section>
          <Block type="Column-2">
            <div>
              <Text
                text={[
                  `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
                ]}
              />
              <List
                list={[`Identify the story (title of the novel, movie, etc.).`]}
              />
              <List
                type={"alphabetic"}
                list={[
                  `Identify the story (title of the novel, movie, etc.).`,
                  `What is the setting or settings? (Remember, “time” can include the historical era, year, season, month, day, time, etc.) `,
                ]}
              />
            </div>
            <Text
              text={[
                `Then, respond to the word clouds of at least three other students. Identify your favourite words from their list and ask questions related to the meaning of some words.`,
              ]}
            />
          </Block>
        </Section>
        {/* List*/}
        <Section>
          <Block>
            <Block type="Box">
              <Icons text={"99"} type={"number"} />
              <Text
                text={[
                  `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
                ]}
              />
              <List
                indent="true"
                type={"alphabetic"}
                list={[
                  `un logiciel de traitement de texte`,
                  `un logiciel de correction grammaticale (p. ex., Antidote)`,
                  `un logiciel de traitement de texte`,
                  `un logiciel de correction grammaticale (p. ex., Antidote), un logiciel de correction grammaticale (p. ex., Antidote)`,
                ]}
              />
            </Block>
            <Block type="Box">
              <Icons text={"2"} type={"number"} />
              <Text
                text={[
                  `Here are three websites that could help you build your word cloud, or you could build it by hand. Once you have completed it, you can take a photo of your work or save your image and upload it to the discussion forum.`,
                ]}
              />
              <List
                indent="true"
                type={"alphabetic"}
                list={[
                  `un logiciel de traitement de texte`,
                  `un logiciel de correction grammaticale (p. ex., Antidote), un logiciel de correction grammaticale (p. ex., Antidote)`,
                ]}
              />
            </Block>
          </Block>
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Image Blocks</h1>
      <div id="Image Blocks">
        {/*Image Block */}
        <Image
          img="assets/Module1/img/01/02-02.jpg"
          alt="A series of 30 words of different sizes and colours that are put together in a way that forms the shape of a cloud."
          position="right"
        >
          <Text
            text={[
              `Brainstorming is a fun, spontaneous way of coming up with ideas.
				  As an introduction to our module on short stories, take a minute to brainstorm words related to stories. Here are three words to get 
				  As an introduction to our module on short stories, take a minute to brainstorm words related to stories. Here are three words to get you staBrainstorming is a fun, spontaneous way of coming up with ideas. It helps you explore new areas and get creative.

`,
            ]}
          />
        </Image>

        <Image
          img="assets/Module1/img/01/05-01.png"
          alt="A series of 30 words of different sizes and colours that are put together in a way that forms the shape of a cloud."
          position="center"
        />
        <Image
          img="assets/Module1/img/01/02-02.jpg"
          alt="A series of 30 words of different sizes and colours that are put together in a way that forms the shape of a cloud."
          position="left"
        >
          <Text
            text={[
              `Brainstorming is a fun, spontaneous way of coming up with ideas. It helps you explore new areas and get creative.`,
            ]}
          />
          <List list="Hello" />
        </Image>
      </div>
      <div id="Learning Goals and Skills">
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
      </div>
      <div id="Thematic Vocabulary">
        <Thematic_Vocabulary
          title={`Thematic Vocabulary for This Challenge`}
          text={[
            `You will discover the following words or expressions during your challenge. Make sure to apply reading strategies to develop an understanding of these words.`,
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
      </div>
      <h2 style={{marginTop: "100px"}}>Audio/Video</h2>
      <div>
        <Audio
          audioData="frco4_01.30_adrienne"
          // title="Elements of a Comic Strip"
          button="ACCÉDER À LA TRANSCRIPTION"
        />
      </div>
      <h1 style={{marginTop: "100px"}}>Buttons</h1>
      <div id="Buttons">
        <Section>
          <Block type="Column-2" collapse={"tablet"} position={"center"}>
            <Button
              type={"microsoft"}
              link={"https://worditout.com/word-cloud/create"}
            />
            <Button
              type={"google"}
              link={"https://worditout.com/word-cloud/create"}
            />
          </Block>
          <Block type="Column-2">
            <div>
              <Text text={"Word It Out"} type="heading" />
              <Text text={"Pour compléter cette tâche, tu auras besoin de :"} />
              <Button
                type={"link"}
                link={"https://www.wordclouds.com/"}
                text={"Go to website hello goodbye"}
              />
            </div>
            <div>
              <Text text={"Word It Out"} type="heading" />
              <Button
                type={"link"}
                link={"https://wordart.com/"}
                text={"Go to website"}
              />
            </div>
          </Block>
          <Block type="Column-3">
            <div>
              <Text text={"Word It Out"} type="heading" />
              <Button
                type={"link"}
                link={"https://www.wordclouds.com/"}
                text={"Go to website"}
              />
            </div>
            <div>
              <Text text={"Word It Out"} type="heading" />
              <Button
                type={"link"}
                link={"https://wordart.com/"}
                text={"Go to website"}
              />
            </div>
            <div>
              <Text text={"Word It Out"} type="heading" />
              <Button
                type={"link"}
                link={"https://wordart.com/"}
                text={"Go to website"}
              />
            </div>
          </Block>
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Forums and icons</h1>
      <div id="Forums and icons">
        <Section>
          <Block>
            <Discussion_Forum
              heading={"Forum de discussion"}
              linkText={
                "Rends-toi au forum de discussion pour partager ta réponse."
              }
              link={"https://www.wordclouds.com/"}
            />
          </Block>
        </Section>
        <Section>
          <Block>
            <Submit_Work
              heading={"Soumets ton travail"}
              subheading={
                "Lorsque tu as terminé ton travail, soumets-le à ton enseignante ou ton enseignant pour obtenir sa rétroaction."
              }
            />
          </Block>
        </Section>
        <Section>
          <Block>
            <Text
              text={[
                `Select an image to learn more about it.`,
                `SecondSlide: In this challenge, you will learn about the
				structure of stories in order to become an expert storyteller
				yourself.`,
              ]}
            />
            <Remember />
            <Text
              text={[
                `Select an image to learn more about it.`,
                `SecondSlide: In this challenge, you will learn about the
				structure of stories in order to become an expert storyteller
				yourself.`,
                `Select an image to learn more about it.`,
                `SecondSlide: In this challenge, you will learn about the
					 structure of stories in order to become an expert storyteller
					 yourself.`,
              ]}
            />
          </Block>
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>DynamicBlock</h1>
      <div id="DynamicBlock">
        <Section>
          <DynamicBlock type="dynamic" order={["Q1", "Q2", "Q3"]}>
            <MultipleChoiceComponent
              id="3"
              config="assets/Module1/data/05-03.json"
            />
            <MultipleChoiceComponent
              id="4"
              config="assets/Module1/data/05-04.json"
            />
            <MultipleChoiceComponent
              id="5"
              config="assets/Module1/data/05-05.json"
            />
          </DynamicBlock>
        </Section>

        <Section>
          <DynamicBlock type="dynamic" order={["Q1"]}>
            <MultipleChoiceComponent
              id="2"
              config="assets/Module1/data/05-01.json"
            />
          </DynamicBlock>
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Widgets</h1>
      <div id="Widgets">
        <h2 style={{marginTop: "100px"}}>Accordian</h2>
        <div id="Accordian">
          <Block>
            <Accordion>
              <AccordionItem
                title="Accordéon 1"
                text="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte."
              />
              <AccordionItem
                title="Accordéon 2"
                text={[
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                  `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.`,
                ]}
              />
              <AccordionItem
                title="Accordéon 3"
                text={["premier paragraphe", "la deuxième paragraphe"]}
                img={[
                  {
                    src: "assets/Module1/img/sample_image3.png",
                    alt: "exemple d'image",
                    size: "landscape",
                  },
                ]}
              />
              <AccordionItem
                title="Accordéon 4"
                text={[
                  "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.",
                  "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.",
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "exemple d'image",
                    size: "portrait",
                  },
                ]}
              />
            </Accordion>
          </Block>
        </div>

        <h2 style={{marginTop: "100px"}}>Tab</h2>
        <div id="Tab">
          <Block>
            <Tab>
              <TabItem
                title="onglet élément 1"
                text="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. "
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "exemple d'image",
                  },
                ]}
              />
              <TabItem
                title="onglet élément 2"
                text="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. "
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "exemple d'image",
                  },
                ]}
              />
              <TabItem
                title="onglet élément 3"
                text={[
                  `Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).`,
                  `De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "exemple d'image",
                  },
                ]}
              />
              <TabItem
                title="onglet élément 4"
                text={`The game "Two Truths and a Lie" is a storytelling activity in which people
			 share short stories about themselves. Two of the stories are truthful,
			 while the third is a lie. This game shows how good storytelling skills can
			 be used as a means to entertain and relate information about an event. In
			 this challenge, you will learn about the structure of stories in order to
			 become an expert storyteller yourself.`}
                // img={[{src: "assets/Module1/img/sample_half_img.jpg"}, {alt:""}]}
              />
            </Tab>
          </Block>
        </div>
        <h2 style={{marginTop: "100px"}}>Carousal - Text</h2>
        <div id="Carousal">
          <Block>
            <Carousel type="text">
              <CarouselItem
                heading="Introduction"
                subheading="With one paragraph"
                text="In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
              />
              <CarouselItem
                heading="Introduction"
                subheading="With two+ paragraphs"
                text={[
                  `Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).`,
                  `De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.`,
                ]}
              />
              <CarouselItem
                heading="Introduction"
                subheading="With one pargaraph and an image"
                text="In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "exemple d'image",
                  },
                ]}
              />
              <CarouselItem
                heading="Introduction"
                subheading="With one paragraph"
                text="In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
              />
              <CarouselItem
                heading="Introduction"
                subheading="With two+ paragraphs"
                text={[
                  `Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).`,
                  `De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.`,
                ]}
              />
            </Carousel>
          </Block>
        </div>
        <h2 style={{marginTop: "100px"}}>Carousel - Photo</h2>
        <div id="Carousel - Photo">
          <Block>
            <Carousel type="photo">
              <CarouselItem
                text="FirstSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image one",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, "
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image two",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image three",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "Carousel sample image four",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image five",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image six",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image seven",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-01.png",
                    alt: "Carousel sample image eight",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "Carousel sample image nine",
                  },
                ]}
              />
              <CarouselItem
                text="SecondSlide: In this challenge, you will learn about the structure of stories in order to become an expert storyteller yourself."
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "Carousel sample image ten",
                  },
                ]}
              />
            </Carousel>
          </Block>
        </div>
        <h2 style={{marginTop: "100px"}}>Timeline</h2>
        <div id="Timeline">
          <Block>
            <Tab type="timeline">
              <TabItem
                title="1970"
                list={`Lorem Ipsum`}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "1970 tab image",
                  },
                ]}
              />
              <TabItem
                title="1980"
                list={[
                  `Lorem Ipsum`,
                  `Lorem Ipsum dolor sit amet`,
                  `Lorem Ipsum dolor sit amet enim ad minim veniam`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "1980 tab image",
                  },
                ]}
              />
              <TabItem
                title="1990"
                list={[
                  `Lorem Ipsum`,
                  `Lorem Ipsum dolor sit amet`,
                  `Lorem Ipsum dolor sit amet enim ad minim veniam`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "1990 tab image",
                  },
                ]}
              />
              <TabItem
                title="2000"
                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "2000 tab image",
                  },
                ]}
              />
              <TabItem
                title="2010"
                text={[
                  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.`,
                  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "2010 tab image",
                  },
                ]}
              />
              <TabItem
                title="2020"
                list={[
                  `Lorem Ipsum`,
                  `Lorem Ipsum dolor sit amet`,
                  `Lorem Ipsum dolor sit amet enim ad minim veniam`,
                ]}
                // img={[{src: "assets/Module1/img/sample_half_img.jpg"}, {alt:""}]}
              />
              <TabItem
                title="2030"
                text={`Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.`}
                // img={[{src: "assets/Module1/img/sample_half_img.jpg"}, {alt:""}]}
              />
            </Tab>
          </Block>
        </div>
        <h2 style={{marginTop: "100px"}}>Timeline</h2>
        <div id="Timeline">
          <Block>
            <Tab type="timeline">
              <TabItem
                title="Avant 1970"
                list={`Lorem Ipsum`}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "Avant 1970 tab image",
                  },
                ]}
              />
              <TabItem
                title="1980"
                list={[
                  `Lorem Ipsum`,
                  `Lorem Ipsum dolor sit amet`,
                  `Lorem Ipsum dolor sit amet enim ad minim veniam`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "1980 tab image",
                  },
                ]}
              />
              <TabItem
                title="1990"
                list={[
                  `Lorem Ipsum`,
                  `Lorem Ipsum dolor sit amet`,
                  `Lorem Ipsum dolor sit amet enim ad minim veniam`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "1990 tab image",
                  },
                ]}
              />
              <TabItem
                title="2000"
                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "2000 tab image",
                  },
                ]}
              />
              <TabItem
                title="2010 à aujourd'hui"
                text={[
                  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.`,
                  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.`,
                ]}
                img={[
                  {
                    src: "assets/Module1/img/01/05-03.jpg",
                    alt: "2010 à aujourd'hui tab image",
                  },
                ]}
              />
            </Tab>
          </Block>
        </div>
      </div>
      <h1 style={{marginTop: "100px"}}>Text Sizes</h1>
      <div id="Text-Sizes">
        <Section>
          <h1>
            H1: Title <br /> Summary of Text Sizing
          </h1>
          <h2>
            H2: Title <br /> Summary of Text Sizing
          </h2>
          <h3>
            H3: Title <br /> Summary of Text Sizing
          </h3>
          <h4>
            H4: TItle <br /> Summary of Text Sizing
          </h4>
          <p>Regular font weight 400 paragraph</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            <i>Italic font weight 400 paragraph</i>
          </p>
          <p>
            <i>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </i>
          </p>
          <p>
            <b>Bold font weight 700 paragraph</b>
          </p>
          <p>
            <b>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </b>
          </p>
          <Block>
            <h2>Components updated on June 6</h2>
          </Block>
        </Section>
        <Section>
          <Block>
            <h2>Testing area for component Library</h2>
            <div role="presentation" style={{background: "#fff"}}>
              <p>
                Testing dolor sit amet, Vivayus adipiscing elit. Vivamus ut quam
                consectetur, tempus ne que ac, iaculis ipsum. Aliquam dolor
                nulla, mollis quam eget, gravida{" "}
                <Tooltip definition="Vivamus ut quam consectetur, tempus negue ac, iaculis ipsum. Aliquam dolor nulla, mollis quis">
                  porttitor
                </Tooltip>{" "}
                liber mollis
              </p>

              <p>
                o. Maecenas at{" "}
                <Tooltip definition="Nam quis nulla. Integer malesuada. In in enim a ar">
                  consectetur ex. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus ut quam consectetur, tempus neque ac,
                  iaculis ipsum.
                </Tooltip>{" "}
                Aliquam dolor nulla, mollis quis quam eget, gravida porttitor
                libero. Maecenas at consectetur e. vayous nas at consectetur ex.
                Lorem dolor sit amet, co nsectetur adipiscing elit. Vivamus ut
                quam consectetur, tempus neque ac, iaculis ipsum. Aliquam dolor{" "}
                <List
                  type="small"
                  list={[
                    `un logiciel de traitement de texte`,
                    <Tooltip
                      definition="Nam quis nulla. Integer malesuada. In in enim ag ar"
                      direction="down"
                    >
                      ipsum
                    </Tooltip>,
                  ]}
                />{" "}
                nulla, mollis quis quam eget, gravida porttitor libero. Maecenas
                at consectetur ex gravida porttitor
              </p>
            </div>
          </Block>

          <DragDropMatching
            config="../assets/Module1/data/drag-and-drop-matching/matching.json"
            id="1"
          />
          <Sorting
            config="../assets/Module1/data/sorting/sorting.json"
            id="1"
          />
          <Sorting
            config="../assets/Module1/data/sorting/sorting2.json"
            id="2"
          />
          <Flowchart
            config="../assets/Module1/data/flowchart/flowchart1.json"
            id="2"
          />
          <Block>
            <ImageHotspots config="../assets/Module1/data/test.json" id="1" />
          </Block>
          <MultipleChoiceComponent
            config="../assets/Module1/data/05-01.json"
            id="11"
          />
          <MultipleChoiceCheckbox
            id="31"
            config="assets/Module1/data/05-03.json"
          />
        </Section>
      </div>
    </div>
  );
};
export default Page1;

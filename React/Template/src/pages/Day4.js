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
  Accordion,
  AccordionItem,
} from "../Components/index";
const Page1 = () => {
  return (
    <div className="Course-Content">
      <h1 style={{marginTop: "100px"}}>Blocking</h1>
      <div id="Blocking">
        <Section type="Grey">
          <Block type="Column-2" collapse="Tablet">
            <Block type="White Wide">
              <h4 className="Padding-20">TFO Layout's</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Block>
            <Block type="Box">
              <h4>Welcome to TFO Layout's</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Block>
          </Block>
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Banners</h1>
      <div id="Page Banners">
        <Section>
          <Banner
            heading={"Brainstorm: Words Related to Stories"}
            subheading={"Stories are part of the human experience"}
            image={"assets/Module1/img/01/sample.png"}
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
      <h1 style={{marginTop: "100px"}}>Lists</h1>
      <div id="Lists">
        <Section>
          <Block>
            <List
              list={[
                `un logiciel de traitement de texte un logiciel de correction`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />

            <List
              type={"small"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />

            <List
              indent={true}
              type={"sub"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />

            <List
              indent={true}
              type={"alphabetic"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
            <List
              type={"numeric"}
              list={[
                `un logiciel de traitement de texte un logiciel de correction`,
                `un logiciel de correction grammaticale (p. ex., Antidote)`,
              ]}
            />
          </Block>
        </Section>
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
          <p></p>
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
        </Section>
      </div>
      <h1 style={{marginTop: "100px"}}>Images</h1>
      <div id="Images">
        <Section type="Grey">
          <Image
            img="assets/Module1/img/01/02-02.jpg"
            alt="A series of 30 words of different sizes and colours that are put 
				together in a way that forms the shape of a cloud."
            position="right"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo
              hic eligendi numquam deleniti officiis, sit est ratione natus
              reiciendis saepe, repellat iusto illum veritatis quae praesentium
              voluptatum expedita reprehenderit!
            </p>
          </Image>
        </Section>

        <Section type="Grey">
          <Image
            img="assets/Module1/img/01/05-01.png"
            alt="A series of 30 words of different sizes and colours"
            position="center"
          />
        </Section>

        <Section type="Grey">
          <Image
            img="assets/Module1/img/01/02-02.jpg"
            alt="A series of 30 words of different sizes and colours"
            position="left"
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <List type="numeric" list={["item 1", "item 2"]} />
          </Image>
        </Section>
      </div>
      <div id="Learning Goals and Skills">
        <Section>
          <LearningGoals goals={[`Goal 1`, `Goal 2`, `Goal 3`, `Goal 4`]} />

          <LearningSkillsHabits skills={[`Skill`]} habits={[`Habit`]} />
        </Section>
      </div>
      <div id="Thematic Vocabulary">
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
        <Section>
          <Block>
            <h2>Accordion</h2>
            <Accordion>
              <AccordionItem
                title="Accordéon 1"
                text="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte."
              />
              <AccordionItem
                title="Accordéon 2"
                text="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte."
              />
              <AccordionItem
                title="Accordéon 3"
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
        </Section>
      </div>
    </div>
  );
};

export default Page1;

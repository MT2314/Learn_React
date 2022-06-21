import React from "react";

import {
  Audio,
  Section,
  Block,
  Blockquote,
  Button,
  LearningGoals,
  Banner,
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

const Widgets = () => {
  return (
    <div className="Course-Content">
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
    </div>
  );
};
export default Widgets;

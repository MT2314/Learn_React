import React from "react";

import {
    Section,
    Block,
    List
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

function Page3() {
  return (
    <>
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          <i>Italic font weight 400 paragraph</i>
        </p>
        <p>
          <i>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </i>
        </p>
        <p>
          <b>Bold font weight 700 paragraph</b>
        </p>
        <p>
          <b>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </b>
        </p>
        <Block>
          <h2>Components updated on June 6</h2>
        </Block>
      </Section>
      <Section>
        <Block>
          <h2>Testing area for component Library</h2>
          <div role="presentation" style={{ background: "#fff" }}>
            <p>
              Testing dolor sit amet, Vivayus adipiscing elit. Vivamus ut quam
              consectetur, tempus ne que ac, iaculis ipsum. Aliquam dolor nulla,
              mollis quam eget, gravida{" "}
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
        <Sorting config="../assets/Module1/data/sorting/sorting.json" id="1" />
        <Sorting config="../assets/Module1/data/sorting/sorting2.json" id="2" />
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
    </>
  );
}

export default Page3;

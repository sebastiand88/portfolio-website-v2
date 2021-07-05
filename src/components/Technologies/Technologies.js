import React from "react";
import { DiNodejsSmall, DiReact, DiBootstrap, DiMongodb } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My main focus is on learning new and relevant Front-End Development
      technologies and making attracting, user friendly applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Focusing on <br />
            learning React.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiBootstrap size="5rem" />
        <DiReact size="5rem" />
        <DiNodejsSmall size="5rem" />
      </ListItem>

      <ListItem>
        <DiMongodb size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and mongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

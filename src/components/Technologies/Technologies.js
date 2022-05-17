import React from "react";
import { DiFirebase, DiReact, DiZend, } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
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
    <SectionDivider divider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Design to building smart contracts and DApps
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
   
      <ListItem>
        <picture>
          <SiSolidity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Hardhat, Truffle, Openzeppelin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

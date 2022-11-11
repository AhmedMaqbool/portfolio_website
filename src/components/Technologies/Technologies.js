import React from 'react';
import { DiFirebase, DiZend, DiNodejsSmall, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiExpress, SiMongodb } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Front-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Html</ListTitle>
          {/* <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Css</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiTypescript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Node.js</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiExpress size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Express.js</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPostgresql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Sql</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NoSql</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

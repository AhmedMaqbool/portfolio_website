import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome
          <span style={{ "-webkit-text-fill-color": "coral", "margin-left": "5px" }}>👋</span>
          <br />I build things for the web
        </SectionTitle>
        <SectionText>
          My name is Ahmed Maqbool, I'm a full stack developer with proficiency
          in front end and backend layers of an application and possessing a
          strong willingness to learn about new technology trends
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;

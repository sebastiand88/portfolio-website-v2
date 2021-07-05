import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Front End <br />
        Web Developer
      </SectionTitle>
      <SectionText>
        I'm Sebastian Damian, a self-taught web developer based in Glasgow.
        After 10+ years of working in hospitality I decided to change my career;
        and what better field for me to chose from than a career in web
        development as I've been passionate about computers and new technology
        all my life. So I decided to give coding a try.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;

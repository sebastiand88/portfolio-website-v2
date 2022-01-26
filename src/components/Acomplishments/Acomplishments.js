import React from "react";
import { SiPython, SiDjango, SiNextDotJs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: <FaReact size="5rem" />, text: "Perfect my ReactJS skills" },
  {
    number: <SiNextDotJs size="5rem" />,
    text: "Improve my knowledge in Next.js ",
  },
  {
    number: <SiPython size="5rem" />,
    text: "Learn the fundamentals of Python",
  },
  { number: <SiDjango size="5rem" />, text: "Make some projects using Django" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Future Personal Goals</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

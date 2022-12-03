import React from 'react';
import {data} from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';



const Acomplishments = () => (
  <div>
    <Section>
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {data.map((card,index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  </div>
);

export default Acomplishments;

import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id,image,title,description,visit,tags,source}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo style={{marginBottom:"2rem"}}>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>{tags.map((tag,i) => (
                  <Tag>{tag}</Tag>
              ))}</TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  </div>
);

export default Projects;
import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Global, css } from '@emotion/core';

import FlexContainer from '../components/flex-container';
import { COLORS } from '../utils/styles';
import Layout from '../components/layout';

import useIndexEffect from './index.effect';
import {
  SiteWrapper,
  StaticContainer,
  MobileContainer,
  NameHeader,
  PositionHeader,
  HorizontalRow,
  MobileImageContainer,
  ImageContainer,
  ContentContainer,
  VerticalSection,
  ScrollPrompt,
} from './index.styles';

export default ({ data }) => {
  const scrollerRef = useRef();
  const contentRef = useRef();
  const { isMobile, opacity, scrollerVisibility } = useIndexEffect(
    scrollerRef,
    contentRef,
  );

  return (
    <SiteWrapper ref={scrollerRef} isMobile={isMobile}>
      <Global
        styles={css`
          body {
            background-image: linear-gradient(
              145deg,
              ${COLORS.backgroundLight},
              ${COLORS.backgroundDark}
            );
            height: 100vh;
          }
        `}
      />
      <StaticContainer align="flex-end" isMobile={isMobile}>
        <Layout
          css={css`
            opacity: ${opacity};
          `}
        >
          <FlexContainer align="center" justify="space-between">
            {
              <div>
                <FlexContainer align="center">
                  <PositionHeader>
                    Full-Stack Developer & Freelancer
                  </PositionHeader>
                  <HorizontalRow />
                </FlexContainer>
                <NameHeader>Mitchel Pigsley</NameHeader>
              </div>
            }
            <ImageContainer>
              <Img fluid={data.mitch.childImageSharp.fluid} />
            </ImageContainer>
          </FlexContainer>
        </Layout>
      </StaticContainer>
      <MobileContainer direction="column" align="center" isMobile={isMobile}>
        <PositionHeader>Full-Stack Developer & Freelancer</PositionHeader>
        <div>
          <NameHeader>Mitchel Pigsley</NameHeader>
        </div>
        <MobileImageContainer>
          <Img
            css={css`
              background-color: ${COLORS.background};
              border: 20px solid ${COLORS.backgroundDark};
              border-radius: 50%;
              margin-top: 3rem;
              height: 50vw;
              width: 50vw;
            `}
            fluid={data.mitch.childImageSharp.fluid}
          />
        </MobileImageContainer>
      </MobileContainer>
      <Layout>
        <ContentContainer ref={contentRef} isMobile={isMobile}>
          <FlexContainer direction={isMobile ? 'column' : 'row'}>
            <VerticalSection direction="column" flex="2" isMobile={isMobile}>
              <h3>ABOUT</h3>
              <p>
                I spend my days as a lead developer for a senior living
                community platform called Lifeloop based out of Omaha, Nebraska
                where I primarily develop using Node.js, Express.js, React, and
                Redux. During the evenings and weekend I spend time with my
                family, reading and writing, and working on personal and
                freelance design and development.
              </p>
              <p>
                I graduated with a Bachelors of Science in Electical & Computer
                Engineering at the University of Nebraska - Lincoln. There is a
                sweet spot found between the technical and the creative where I
                find myself on a daily basis. I believe it is important to weigh
                the two when approaching a new or existing project. In the end
                it comes down to what the needs of the client are and how design
                and technology can enhance and bring cohesion to their vision.
              </p>
            </VerticalSection>
            <VerticalSection direction="column" flex="1" isMobile={isMobile}>
              <h3>TECHNOLOGY</h3>
              <p>
                Node.js | Express.js | React | Redux | Reflux | Webpack |
                Backbone.js | Marionette.js | C# | .NET | Ruby | Rails | Java |
                C
              </p>
            </VerticalSection>
          </FlexContainer>
        </ContentContainer>
      </Layout>
      <ScrollPrompt isVisible={scrollerVisibility}>Scroll</ScrollPrompt>
    </SiteWrapper>
  );
};

export const query = graphql`
  query {
    mitch: file(relativePath: { eq: "mitch.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

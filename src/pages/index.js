import React, { useRef, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import FlexContainer from '../components/flex-container';
import { variableSize, COLORS } from '../utils/styles';
import { useDevice } from '../utils/effects';
import Layout from '../components/layout';

const HEADER_HEIGHT = variableSize(0, 310);
const BODY_PADDING_LARGE = '3rem';
const STATIC_PADDING = '1rem';

const SiteWrapper = styled.div(props => {
  const bodyPadding = props.isMobile ? 0 : BODY_PADDING_LARGE;
  return `
    height: ${props.isMobile ? 'initial' : 'calc(100vh - 3rem)'};
    overflow-y: auto;
    padding: ${bodyPadding} ${bodyPadding} 0;
  `;
});

const StaticContainer = styled(FlexContainer)(props => {
  const bodyPadding = props.isMobile ? 0 : BODY_PADDING_LARGE;
  return `
    display: ${props.isMobile ? 'none' : 'flex'};
    height: ${HEADER_HEIGHT};
    left: calc(
      ${bodyPadding} +
        ${STATIC_PADDING}
    );
    position: fixed;
    right: calc(${bodyPadding} + ${STATIC_PADDING});
    top: ${bodyPadding};
    z-index: -1;
`;
});

const MobileContainer = styled(FlexContainer)`
  background-color: ${COLORS.backgroundDark};
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  padding: 3rem 1.5rem;
`;

const NameHeader = styled.h1`
  display: inline-block;
  flex: 0;
  font-size: ${variableSize(10, 60)};
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 1;

  &:after {
    background-color: ${COLORS.highlight};
    bottom: -12px;
    content: ' ';
    height: ${variableSize(20, 35)};
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }
`;

const PositionHeader = styled.h3`
  color: ${COLORS.textSecondary};
  display: inline-block;
  font-size: ${variableSize(12, 15)};
  font-weight: 100;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const HorizontalRow = styled.hr`
  border-top: 1px solid ${COLORS.textSecondary};
  flex: 1;
  margin: 0;
`;

const MobileImageContainer = styled.div`
  position: relative;
  height: 25vw;
  width: 50vw;
`;

const ImageContainer = styled.div`
  margin-right: ${variableSize(-100, 30)};
  max-width: 500px;
  width: 32vw;
`;

const ContentContainer = styled.div`
  background-color: ${COLORS.background};
  margin-top: ${props => (props.isMobile ? 0 : HEADER_HEIGHT)};
  padding: ${props => (props.isMobile ? 'calc(25vw + 3rem)' : '3rem')}
    ${variableSize(-30, 80)} 3rem;
  width: 100%;
`;

const VerticalSection = styled(FlexContainer)`
  margin: 0 ${props => (props.isMobile ? '0 2rem' : '1.5rem')};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export default ({ data }) => {
  const { isMobile } = useDevice();
  const scrollerRef = useRef();
  const contentRef = useRef();
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current) {
      return () => {};
    }

    const { offsetTop } = contentRef.current;
    const height = offsetTop - 100;
    const onScroll = evt => {
      const { scrollTop } = evt.currentTarget;
      setOpacity(Math.max(0, (height - scrollTop) / height));
    };

    scrollerRef.current.addEventListener('scroll', onScroll);
    return () => scrollerRef.current.removeEventListener('scroll', onScroll);
  }, [scrollerRef.current, contentRef.current]);

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

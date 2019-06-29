import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import FlexContainer from '../components/flex-container';
import Layout from '../components/layout';

const StaticContainer = styled(FlexContainer)`
  height: 500px;
  position: static;
`;

const NameHeader = styled.h1`
  display: inline-block;
  flex: 0;
  font-size: 4.8rem;
  letter-spacing: 5.5px;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 1;

  &:after {
    background-color: #2b324e;
    bottom: -12px;
    content: ' ';
    height: 35px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }
`;

const PositionHeader = styled.h3`
  color: #7d7a7a;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 100;
  letter-spacing: 2px;
  margin: 0 0 1rem;
  padding: 0 1rem;
  text-transform: uppercase;
`;

const HorizontalRow = styled.hr`
  border-top: 1px solid #7d7a7a;
  flex: 1;
  margin: 0;
`;

const ImageContainer = styled.div`
  max-width: 600px;
  width: 35vw;
`;

export default ({ data }) => (
  <>
    <Global
      styles={css`
        body {
          background-image: linear-gradient(145deg, #131313, black);
          min-height: 100vh;
          padding: 3rem;
        }
      `}
    />
    <Layout>
      <StaticContainer align="center" justify="space-between">
        <div>
          <FlexContainer align="center">
            <PositionHeader>Full-Stack Developer & Freelancer</PositionHeader>
            <HorizontalRow />
          </FlexContainer>
          <NameHeader>Mitchel Pigsley</NameHeader>
        </div>
        <ImageContainer>
          <Img fluid={data.mitch.childImageSharp.fluid} />
        </ImageContainer>
      </StaticContainer>
    </Layout>
  </>
);

export const query = graphql`
  query {
    mitch: file(relativePath: { eq: "mitch.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

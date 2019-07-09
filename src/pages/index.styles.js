import styled from '@emotion/styled';

import FlexContainer from '../components/flex-container';
import { variableSize, COLORS } from '../utils/styles';

const HEADER_HEIGHT = variableSize(0, 310);
const BODY_PADDING_LARGE = '3rem';
const STATIC_PADDING = '1rem';

export const SiteWrapper = styled.div(props => {
  const bodyPadding = props.isMobile ? 0 : BODY_PADDING_LARGE;
  return `
    height: ${props.isMobile ? 'initial' : 'calc(100vh - 3rem)'};
    overflow-y: auto;
    padding: ${bodyPadding} ${bodyPadding} 0;
  `;
});

export const StaticContainer = styled(FlexContainer)(props => {
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

export const MobileContainer = styled(FlexContainer)`
  background-color: ${COLORS.backgroundDark};
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  padding: 3rem 1.5rem;
`;

export const NameHeader = styled.h1`
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

export const PositionHeader = styled.h3`
  color: ${COLORS.textSecondary};
  display: inline-block;
  font-size: ${variableSize(12, 15)};
  font-weight: 100;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  text-transform: uppercase;
`;

export const HorizontalRow = styled.hr`
  border-top: 1px solid ${COLORS.textSecondary};
  flex: 1;
  margin: 0;
`;

export const MobileImageContainer = styled.div`
  position: relative;
  height: 25vw;
  width: 50vw;
`;

export const ImageContainer = styled.div`
  margin-right: ${variableSize(-100, 30)};
  max-width: 500px;
  width: 32vw;
`;

export const ContentContainer = styled.div`
  background-color: ${COLORS.background};
  margin-top: ${props => (props.isMobile ? 0 : HEADER_HEIGHT)};
  padding: ${props => (props.isMobile ? 'calc(25vw + 3rem)' : '3rem')}
    ${variableSize(-20, 80)} 3rem;
  width: 100%;
`;

export const VerticalSection = styled(FlexContainer)`
  margin: 0 ${props => (props.isMobile ? '0 2rem' : '1.5rem')};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ScrollPrompt = styled.div`
  bottom: 4.5rem;
  left: 2rem;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  position: fixed;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transition: opacity 0.8s linear;

  &:before {
    border-top: 1px solid ${COLORS.text};
    content: ' ';
    display: inline-block;
    height: 6px;
    margin-right: 0.4rem;
    width: 35px;
  }
`;

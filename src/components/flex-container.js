import styled from '@emotion/styled';

export default styled('div', {
  shouldForwardProp: () => true,
})`
  display: flex;
  ${props => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${props => (props.align ? `align-items: ${props.align};` : '')}
  ${props => (props.justify ? `justify-content: ${props.justify};` : '')}
  ${props => (props.flex ? `flex: ${props.flex};` : '')}
  ${props => (props.wrap ? 'flex-wrap: wrap;' : '')}
  ${props => (props.scroll ? 'overflow-y: auto;' : '')}
`;

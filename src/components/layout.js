import styled from '@emotion/styled';

export default styled('div', {
  shouldForwardProp: prop => prop === 'children',
})`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

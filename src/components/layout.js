import styled from '@emotion/styled';

export default styled('div', {
  shouldForwardProp: prop => prop === 'children',
})`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

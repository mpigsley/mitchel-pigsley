export const COLORS = {
  text: '#B7B7B7',
  textSecondary: '#7d7a7a',
  highlight: '#2b324e',
  background: '#171717',
  backgroundLight: '#131313',
  backgroundDark: 'black',
};

const minWidth = 400;
const maxWidth = 1400;
export const variableSize = (min, max) =>
  `calc(${min}px + ((100vw -${minWidth}px) / ${(maxWidth - minWidth) /
    (max - min)}))`;

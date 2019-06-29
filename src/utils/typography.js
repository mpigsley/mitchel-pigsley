import Typography from 'typography';

import { COLORS } from './styles';

const typography = new Typography({
  bodyWeight: '400',
  bodyColor: COLORS.textSecondary,
  headerColor: COLORS.text,
  headerFontFamily: ['DM Serif Display', 'serif'],
  bodyFontFamily: ['Lora', 'Georgia', 'serif'],
  googleFonts: [
    { name: 'DM Serif Display', styles: ['400'] },
    { name: 'Lora', styles: ['400', '700'] },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;

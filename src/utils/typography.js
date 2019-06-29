import Typography from 'typography';

import { COLORS } from './styles';

const HEADER_FONT = 'Palanquin Dark';
const BODY_FONT = 'Lora';

const typography = new Typography({
  bodyWeight: '400',
  bodyColor: COLORS.textSecondary,
  headerColor: COLORS.text,
  headerFontFamily: [HEADER_FONT, 'sans-serif'],
  bodyFontFamily: [BODY_FONT, 'Georgia', 'serif'],
  googleFonts: [
    { name: HEADER_FONT, styles: ['700'] },
    { name: BODY_FONT, styles: ['400', '700'] },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;

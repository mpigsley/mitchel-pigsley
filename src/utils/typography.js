import Typography from 'typography';

const typography = new Typography({
  bodyWeight: '400',
  bodyColor: '#7D7A7A',
  headerColor: '#B7B7B7',
  headerFontFamily: ['DM Serif Display', 'serif'],
  bodyFontFamily: ['Lora', 'Georgia', 'serif'],
  googleFonts: [
    { name: 'DM Serif Display', styles: ['400'] },
    { name: 'Lora', styles: ['400', '700'] },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;

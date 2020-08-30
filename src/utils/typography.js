import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      backgroundImage: `none`,
      textShadow: `none`,
    },
  };
};

// // delete fairyGatesTheme.googleFonts

const typography = new Typography(fairyGatesTheme);
// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   googleFonts: [
//     { name: 'Bai Jamjuree', styles: [700] },
//     { name: 'Muli', styles: [400, 700, 800] },
//   ],
//   headerFontFamily: ['Muli', 'sans-serif'],
//   bodyFontFamily: ['Muli', 'serif'],
// });

export default typography;

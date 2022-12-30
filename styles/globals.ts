import { globalCss } from '.';

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`
  },

  ':root': {
    scrollBehavior: 'smooth'
  },

  body: {
    backgroundColor: '$background-dark',
    fontFamily: '$default'
  }
})();

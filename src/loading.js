
function loadingState({ addComponents, addUtilities, addVariant, e, postcss }){
  const loading = {
    '.fohn-segment.loading' : {
      position: 'relative',
      pointerEvents: 'none',
      '-webkit-transition': 'all 0s linear',
      transition: 'all 0s linear',
    },
    '.fohn-segment.loading:before': {
      position: 'absolute',
      content: '""',
      background: 'rgba(255,255,255,.6)',
      width: '100%',
      height: '100%',
    },
    '.fohn-segment.loading:after': {
      content: '""',
      position: 'absolute',
      top: 'calc(50% - (1em / 2))',
      left: 'calc(50% - (1em / 2))',
      width: '3em',
      height: '3em',
      border: '4px solid var(--color-info)',
      borderRadius: '9999px',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite',
    },
    '.fohn-btn.loading' : {
      position: 'relative',
      cursor: 'default',
      textShadow: 'none !important',
      color: 'transparent',
      opacity: 1,
      pointerEvents: 'auto',
      '-webkit-transition': 'all 0s linear',
      transition: 'all 0s linear',
    },
    '.fohn-btn.loading:before': {
      position: 'absolute',
      content: '""',
      top: '50%',
      left: '50%',
      margin: '-.64285714em 0 0 -.64285714em',
      width: '1.28571429em',
      height: '1.28571429em',
      borderRadius: '500rem',
      border: '.2em solid rgba(0,0,0,.15)',
    },
    '.fohn-btn.loading:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin:' -.64285714em 0 0 -.64285714em',
      width: '1.28571429em',
      height: '1.28571429em',
      borderRadius: '500rem',
      border: '.2em solid white',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite',
    }
  }
  // addUtilities(loading);
  addComponents(loading/*, ['btn']*/);

}

module.exports = loadingState;

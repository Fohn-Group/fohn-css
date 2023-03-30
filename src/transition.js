function transition({ addComponents, addUtilities, addVariant, e, postcss }) {

  const fade = {
    '.fade-enter-active' : {
      // transition: 'opacity .02s',
        '-moz-transition': 'opacity 0.2s ease-in-out',
        '-o-transition': 'opacity 0.2s ease-in-out',
        '-webkit-transition': 'opacity 0.2s ease-in-out',
        transition: 'opacity 0.2s ease',
    },
    '.fade-leave-active' : {
      // transition: 'opacity .1s'
      '-moz-transition': 'opacity 0.2s ease-in-out',
      '-o-transition': 'opacity 0.2s ease-in-out',
      '-webkit-transition': 'opacity 0.2s ease-in-out',
      transition: 'opacity 0.2s ease',
    },
    '.fade-enter-from' : {
      opacity: 0
    },
    '.fade-leave-to' : {
      opacity: 0
    }
  };

  const slideDown = {
      '.slide-down-enter-active' : {
      '-moz-transition-duration': '0.1s',
      '-webkit-transition-duration': '0.1s',
      '-o-transition-duration': '0.1s',
      'transition-duration': '0.1s',
      '-moz-transition-timing-function': 'ease-in',
      '-webkit-transition-timing-function': 'ease-in',
      '-o-transition-timing-function': 'ease-in',
      'transition-timing-function': 'ease-in',
    },
    '.slide-down-leave-active': {
        '-moz-transition-duration': '0.1s',
        '-webkit-transition-duration': '0.1s',
        '-o-transition-duration': '0.1s',
        'transition-duration': '0.1s',
        '-moz-transition-timing-function': 'cubic-bezier(0, 1, 0.3, 1)',
        '-webkit-transition-timing-function': 'cubic-bezier(0, 1, 0.3, 1)',
        '-o-transition-timing-function': 'cubic-bezier(0, 1, 0.3, 1)',
        'transition-timing-function': 'cubic-bezier(0, 1, 0.3, 1)',
    },
    '.slide-down-enter-to': {
      'max-height': '100px',
      'overflow': 'hidden'
    },
    '.slide-down-leave-from': {
      'max-height': '100px',
      'overflow': 'hidden'
    },

    '.slide-down-enter-from' : {
      'overflow': 'hidden',
      'max-height': '0px',
    },

    '.slide-down-leave-to': {
      'max-height': '0px',
      'overflow': 'hidden'
    },
  };

  addComponents(fade);
  addComponents(slideDown);
}

module.exports = transition;

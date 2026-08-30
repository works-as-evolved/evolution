'use strict';

(() => {
  const {
    evolving: iAmEvolving,
    evolved: iHaveEvolved,
    forked: iHaveBeenForked,
  } = /^(?:works-as-evolv(?:(?<evolved>ed)|(?<evolving>ing))\.)|(?<forked>.+)/.exec(location.hostname)?.groups ?? {};

  document.body.insertAdjacentHTML('beforeend', [
    '<pre>',
    (() => {
      if (iAmEvolving) {
        return 'I am evolving.';
      } else if (iHaveEvolved) {
        return 'I have evolved.';
      } else if (iHaveBeenForked) {
        return 'I have been forked.';
      } else {
        // We come here when location.hostname is the empty string.
        // This might happen, if we are loaded from the local filesystem.
        return 'I am beyond the Web.';
      }
    })(),
    '</pre>'
  ].join(''));
})();

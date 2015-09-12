/* globals blanket, module */
/* jscs:disable disallowVar */
var options = {
  modulePrefix: 'hearth',
  filter: '//.*hearth/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [
    'initializers/container-debug-adapter'
  ],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}

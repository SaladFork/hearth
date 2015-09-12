/* globals blanket, module */
/* jscs:disable disallowVar */
var options = {
  modulePrefix: 'hearth',
  filter: '//.*hearth/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [
    'initializers/container-debug-adapter',
    'initializers/export-application-global',
    'components/app-version',
    'config/environment',
    'controllers/array',
    'controllers/object'
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

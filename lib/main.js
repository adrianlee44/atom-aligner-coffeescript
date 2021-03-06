'use strict';

const provider = require('./provider');

module.exports = {
  config: provider.config,
  activate: () => {
    console.log('activate aligner-coffeescript');
  },
  getProvider: () => provider
};

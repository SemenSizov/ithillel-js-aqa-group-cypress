const { initPlugin } = require('mochawesome-report-generator');

module.exports = (on, config) => {
    on('task', initPlugin(config));
};
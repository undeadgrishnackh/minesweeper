const {handleResult} = require('jest-runner-newman/handle-result');
const newman = require('newman');

module.exports = newman.run({
  collection: 'https://www.getpostman.com/collections/aeb4b1d959e8ce49d85b',
  reporters: ['cli'],
  // any other newman configs
},
(err, result) => {
  handleResult(err, result);
}
);
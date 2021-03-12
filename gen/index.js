const path = require('path');
const Generator = require('@asyncapi/generator');
const { AsyncAPIDocument } = require('@asyncapi/parser');
const generator = new Generator('@asyncapi/nodejs-template', path.resolve(__dirname, "./"));
generator.templateParams = {server:"mosquitto"};
    generator
  .generateFromFile('asyncapi.yaml')
  .then(() => {
    console.log('Done!');
  })
  .catch(console.error);




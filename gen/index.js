const path = require('path');
const Generator = require('@asyncapi/generator');
const generator = new Generator('@asyncapi/nodejs-template', path.resolve(__dirname, "output"));
generator.templateParams = {server:"mosquitto"};
    generator
  .generateFromFile('asyncapi.yaml')
  .then(() => {
    console.log('Done!');
  })
  .catch(console.error);




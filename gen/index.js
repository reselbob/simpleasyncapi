const path = require('path');
const Generator = require('@asyncapi/generator');
const { AsyncAPIDocument } = require('@asyncapi/parser');
const generator = new Generator('@asyncapi/nodejs-template', path.resolve(__dirname, 'example'));

const runner = async () =>{
    generator
  .generateFromFile('asyncapi.yaml')
  .then(() => {
    console.log('Done!');
  })
  .catch(console.error);
}

runner();


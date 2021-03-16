const path = require('path');
const Generator = require('@asyncapi/generator');
const generator = new Generator('@asyncapi/nodejs-template', path.resolve(__dirname, "../urlOutput"));
generator.templateParams = {server:"mosquitto"};
generator
    .generateFromURL('https://raw.githubusercontent.com/reselbob/simpleasyncapi/main/gen/asyncapi.yaml')
    .then(() => {
        console.log('Done!');
    })
    .catch(console.error);

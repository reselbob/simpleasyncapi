const path = require('path');
const Generator = require('@asyncapi/generator');
const generator = new Generator('@asyncapi/html-template', path.resolve(__dirname, "../htmlOutput"));
generator.templateParams = {baseHref:"./"};
generator
    .generateFromURL('https://raw.githubusercontent.com/reselbob/simpleasyncapi/main/gen/asyncapi.yaml')
    .then(() => {
        console.log('Done!');
    })
    .catch(console.error);

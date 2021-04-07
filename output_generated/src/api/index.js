const Hermes = require('hermesjs');
const app = new Hermes();
const { cyan, gray, yellow } = require('colors/safe');
const buffer2string = require('./middlewares/buffer2string');
const string2json = require('./middlewares/string2json');
const json2string = require('./middlewares/json2string');
const logger = require('./middlewares/logger');
const errorLogger = require('./middlewares/error-logger');
const config = require('../lib/config');
const MqttAdapter = require('hermesjs-mqtt');
const wisesayingNeeded = require('./routes/wisesayingNeeded.js');
const wisesayingSent = require('./routes/wisesayingSent.js');

app.addAdapter(MqttAdapter, config.broker.mqtt);

app.use(buffer2string);
app.use(string2json);
app.use(logger);

// Channels
console.log(cyan.bold.inverse(' SUB '), gray('Subscribed to'), yellow('wisesayingNeeded'));
app.use(wisesayingNeeded);
console.log(yellow.bold.inverse(' PUB '), gray('Will eventually publish to'), yellow('wisesayingNeeded'));
app.useOutbound(wisesayingNeeded);
console.log(cyan.bold.inverse(' SUB '), gray('Subscribed to'), yellow('wisesayingSent'));
app.use(wisesayingSent);
console.log(yellow.bold.inverse(' PUB '), gray('Will eventually publish to'), yellow('wisesayingSent'));
app.useOutbound(wisesayingSent);

app.use(errorLogger);
app.useOutbound(logger);
app.useOutbound(json2string);

app
  .listen()
  .then((adapters) => {
    console.log(cyan.underline(`${config.app.name} ${config.app.version}`), gray('is ready!'), '\n');
    adapters.forEach(adapter => {
      console.log('🔗 ', adapter.name(), gray('is connected!'));
    });
  })
  .catch(console.error);

const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('wisesayingNeeded', function (err) {
    if (!err) {
      //client.publish('presence', 'Hello mqtt')
    }
  })
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log({sub: message.toString()});
    //client.end()
  })

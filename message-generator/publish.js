const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')
const {getRandomMessageNeededSync, getRandomMessageSentSync } = require('./messages')

 /*
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
*/
const msg = getRandomMessageNeededSync();

client.publish('wisesayingNeeded', JSON.stringify(msg));
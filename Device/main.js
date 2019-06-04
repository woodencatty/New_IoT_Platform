var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost/mqtt')
 
var restapi = require('./RESTAPI.js')
restapi.register2server();

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
   client.end()
})


var request = require('request');


request.post({url:'http://localhost:3000/reg/device', form: {id:'MNG-01'}}, function(err,httpResponse,body){
console.log("res : "+ httpResponse)    
console.log("body :"+ body)
 })
var request = require('request');


module.exports = {

    register: () => {
        request.post({
            url: 'http://192.9.44.51:3000/reg/device',
            form: {
                id: 'DEV-01'
            }
        }, function (err, httpResponse, body) {
            console.log("res : " + httpResponse)
            console.log("body :" + body)
            let wow = JSON.parse(body);
            console.log(wow.Address);
        })
    }
}
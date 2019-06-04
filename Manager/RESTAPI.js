var request = require('request');

module.exports = {

    register2server: () => {

        request.post({
            url: 'http://192.9.44.51:3000/reg/manager',
            form: {
                id: 'MNG-01'
            }
        }, function (err, httpResponse, body) {
            console.log("res : " + httpResponse)
            console.log("body :" + body)
        })
    }
}
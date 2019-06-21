const request = require('request')

exports.handler = function (event, context, callback) {
  request(
    {
      url: 'https://api.planningcenteronline.com/oauth/token',
      method: 'POST',
      formData: JSON.parse(event.body)
    },
    function (err, response, body) {
      if (!err && response.statusCode === 200) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(body)
        })
      } else {
        callback(null, {
          statusCode: 500,
          body: 'Something went wrong with the api request: ' + JSON.stringify(body)
        })
      }
    })
}

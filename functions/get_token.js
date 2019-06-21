const request = require('request')

exports.handler = function (event, context, callback) {
  console.log(JSON.parse(event.body), '<- type of body')

  request(
    {
      url: 'https://api.planningcenteronline.com/oauth/token',
      method: 'POST',
      formData: JSON.parse(event.body)
    },
    function (err, response, body) {
      console.log(body, '<- response body')
      if (!err && response.statusCode === 200) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(body)
        })
      } else {
        console.log(err, '<- error')
        callback(null, {
          statusCode: 500,
          body: 'Something went wrong with the api request: ' + err
        })
      }
    })
}

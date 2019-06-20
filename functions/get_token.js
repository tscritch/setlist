const request = require('request')

exports.handler = function (event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 500,
      body: 'Bad Request'
    })
  }
  console.log(event.body, '<- body')
  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({ ...event.body })
  // })
  request(
    {
      url: 'https://api.planningcenteronline.com/oauth/token',
      method: 'POST',
      form: event.body
    },
    function (err, response, body) {
      console.log(body, '<- response body')
      if (!err && response.statusCode === 200) {
        callback(null, {
          statusCode: 200,
          body: response
        })
        return
      }
      console.log(err, '<- error')
      callback(null, {
        statusCode: 500,
        body: 'Something went wrong with the api request: ' + err
      })
    })
}

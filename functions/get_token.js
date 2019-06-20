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
    'https://api.planningcenteronline.com/oauth/token',
    {
      method: 'POST',
      body: event.body
    },
    function (err, response, body) {
      if (err) {
        callback(null, {
          statusCode: 500,
          body: 'Something went wrong with the api request: ' + err
        })
      }
      callback(null, {
        statusCode: 200,
        body
      })
    })
}

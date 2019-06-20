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
      formData: event.body
    },
    function (err, response, body) {
      console.log(response, '<- response')
      if (!err && response.statusCode === 200) {
        callback(null, {
          statusCode: 200,
          body
        })
      }
      callback(null, {
        statusCode: 500,
        body: 'Something went wrong with the api request: ' + err
      })
    })
}

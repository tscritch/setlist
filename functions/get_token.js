exports.handler = function (event, context, callback) {
  console.log(event.body, '<- body')
  callback(null, {
    statusCode: 200,
    body: { ...event.body }
  })
  // fetch('https://api.planningcenteronline.com/oauth/token', options).then((res) => res.json()).then((token) => {
  //   console.log(token, '<- token')
  //   window.localStorage.setItem('token', JSON.stringify(token))
  // }).catch((e) => {
  //   console.log(e, '<- error')
  // })
}

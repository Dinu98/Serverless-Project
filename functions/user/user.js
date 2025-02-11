module.exports.post = async (event, context) => {

  console.log(`event: `, event);
  console.log(`context: `, context);

  return {
    "statusCode": 200,
    "isBase64Encoded": false,
    "headers": {
        "Access-Control-Allow-Origin": '*'
    },
    "body": JSON.stringify({
      message: 'Hello from post'
    })
  }

}
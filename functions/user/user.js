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
      TEST_VAR: `${process.env.TEST_VAR}`,
      TEST_VAR_FS: `${process.env.TEST_VAR_FS}`,
      TEST_VAR_COMBINED: `${process.env.TEST_VAR_COMBINED}`,
    })
  }

}
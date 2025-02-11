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
      DB_USERNAME: `${process.env.DB_USERNAME}`,
      DB_PASSWORD: `${process.env.DB_PASSWORD}`,
      DM_ADMIN_SM: `${process.env.DM_ADMIN_SM}`,
      DB_USERNAME_SM: `${process.env.DM_ADMIN_SM}`,
      DB_PASSWORD_SM: `${process.env.DM_ADMIN_SM}`,
    })
  }

}
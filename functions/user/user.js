require('dotenv').config();

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
      DB_USERNAME_SM: `${process.env.DB_USERNAME_SM}`,
      DB_PASSWORD_SM: `${process.env.DB_PASSWORD_SM}`,
      DB_USERNAME_FILE: `${process.env.DB_USERNAME_FILE}`,
      DB_PASSWORD_FILE: `${process.env.DB_PASSWORD_FILE}`,
      FROM_ENV: `${process.env.FROM_ENV}`,
    })
  }

}
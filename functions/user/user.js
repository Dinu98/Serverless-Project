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
      //Accesible because we installed dotenv and configured it above
      FROM_ENV: `${process.env.FROM_ENV}`,
      //Accesible using serverless dotenv plugin
      ENV_USING_PLUGIN: `${process.env.ENV_USING_PLUGIN}`,
      SLS_VARIABLE: `${process.env.SLS_VARIABLE}`,
      AWS_VARIABLE: `${process.env.AWS_VARIABLE}`,
      S3_VARIABLE: `${process.env.S3_VARIABLE}`,
      CF_SERVICE_ENDPOINT: `${process.env.CF_SERVICE_ENDPOINT}`,
      STR_TO_BOOL_VARIABLE: `${process.env.STR_TO_BOOL_VARIABLE}`,
    })
  }

}
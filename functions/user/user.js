require('dotenv').config();

const responses = require('../../utils/responses');
const { createUser } = require('../../utils/dynamoDB');
const { USERS_TABLE } = process.env;

module.exports.createUser = async (event, context) => {
  try {
    console.log(`event.body: `, event.body);
    const body = JSON.parse(event.body);

    const response = await createUser(body, USERS_TABLE);
    console.log('response: ', response);

    return { ...responses.success, body: JSON.stringify(response) };
  } catch (e) {
    console.log(e);
    return { ...responses.error, body: JSON.stringify(e) };
  }
};

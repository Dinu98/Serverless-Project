const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

const dynamoDB = AWS.DynamoDB.DocumentClient();

const createUser = async (item, table) => {
  try {
    const time = new Date().toISOString();
    const params = {
      TableName: table,
      Item: {
        ...item,
        createdAt: time,
        updatedAt: time,
      },
    };

    return dynamoDB.put(params).promise();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getUser = async (email, table) => {
  const params = {
    TableName: table,
    Key: {
      email: email,
    },
    ProjectionExpression: 'email, lastName, firstname',
    ReturnConsumedCapacity: 'TOTAL',
    ConsistentRead: true,
  };

  return dynamoDB.get(params).promise();
};

module.exports = {
  createUser,
  getUser,
};

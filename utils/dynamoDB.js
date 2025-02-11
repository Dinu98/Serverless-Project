const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

const dynamoDB = AWS.DynamoDB.DocumentClient();

const createUser = async(item, table) => {
  
  try{

    const time = new Date().toISOString();
    const params = {
      "TableName": table,
      "Item": {
        ...item,
        createdAt: time,
        updatedAt: time
      }
    }

    return dynamoDB.put(params).promise();
    
  }catch(e) {
    console.log(e);
    throw e;
  }

}

module.exports = {
  createUser
}
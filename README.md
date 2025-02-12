Small serverless project for inserting, updating and getting an item

Function used for creating can also be used for updating as long as you also pass the primary key

Alternatively we can create another handler that uses "Update" instead of put, in cases where we can't send the whole object.

You will need IAM account, AWS CLI with configured profile and serverless framework

Don't forget to run npm install

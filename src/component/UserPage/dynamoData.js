import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration = ConfigurationOptions = {
    region: 'us-east-1',
  secretAccessKey: 'y43M6GPBKZNvQNbZek+W8szNgyma6yXrpk/UwyAx',
  accessKeyId: 'AKIARCGSI7XIF4MJAA5W'
}

AWS.config.update(configuration)
const docClient = new AWS.DynamoDB.DocumentClient()

export const putData = (tableName , data) => {
   
    var params = {
        TableName: tableName,
        Item: data
    }
    console.log('data',data)
    console.log('tablename',tableName)
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
                    // toast("Successfull !");
                //    { <ToastContainer/>}
                   
                  }
        
    })
}
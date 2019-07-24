const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
})

const BUCKET = 'nanoservices-imagens-thumbnail-diego'

const s3 = new AWS.s3();

const getObject = (bucket, key) => {
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: bucket,
            Key: key
        },(err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data.Body);
        })
    })
}


module.exports = {getObject}
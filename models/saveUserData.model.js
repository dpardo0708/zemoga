const MongoClient = require('mongodb').MongoClient;

module.exports = function saveUserData (data) {

  const connectionString = "mongodb+srv://DBDiana:1033@cluster0.mvlqi.mongodb.net/test?retryWrites=true&w=majority";
    MongoClient.connect(connectionString)
  .then(client => {
  	console.log('Connected to Database')
  	const db = client.db('test')
    const collection = db.collection('twitter')
      console.log("req.body",data)
      collection.insertOne(JSON.stringify(data))
  })
  .catch(error => console.error(error))
}

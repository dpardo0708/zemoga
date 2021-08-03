const MongoClient = require('mongodb').MongoClient;


const connectionString = "mongodb+srv://DBDiana:1033@cluster0.mvlqi.mongodb.net/test?retryWrites=true&w=majority";
const connect = MongoClient.connect(connectionString, { useUnifiedTopology: false })

module.exports = connect

const saveUserData = require('../models/saveUserData.model')
 
module.exports = function findUserTimeLine (error, tweets, response) {
  
  const data = []
  for(i in tweets){
    
    data.push({
      "id":tweets[i].id, 
      "text":tweets[i].text
    })
    console.log(data)
    saveUserData(data)
  }   
}


const saveUserData = require('../models/saveUserData.model')
 
module.exports = function findUserController (error, tweets, response) {
  const data = []
  const object = {}

 for(i in tweets){  
     data.push({
        "cod":tweets[i].id, 
        "name":tweets[i].name, 
        "description":tweets[i].description, 
        "image":tweets[i].profile_image_url
    })
    object.data = data  
    console.log(object.data)
   saveUserData(object.data)
  }
}

let mongoose = require("mongoose")

let db = ()=>{

  mongoose.connect("mongodb://localhost:27017/db")
  .then(()=>{
    console.log("connected to mongodb!");
    
  })
  .catch((err)=>{
    console.log("Not connected to mongodb",err)
  })

}

module.exports = db; 
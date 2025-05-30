let mongoose = require("mongoose")


let db = ()=>{
mongoose.connect("mongodb://localhost:27017/yourDatabaseName")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log("Not connected to db",err)
})
}


module.exports=db;
let app = require("./src/app")
let db = require("./db/db")


db()


app.listen(3000,()=>{
    console.log("server start ho gaya");   
})
let express = require("express")
let postRoutes = require("../routes/post.routes")
let cors = require("cors")
let app = express();

app.use(express.json())
app.use(cors())
app.use("/",postRoutes)



module.exports= app;
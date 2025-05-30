let express = require("express")
let userRoutes = require("./routes/user.routes")
let app = express();

app.use(express.json());

app.use("/",userRoutes);

module.exports= app;

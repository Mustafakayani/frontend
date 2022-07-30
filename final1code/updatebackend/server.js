const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router = require("./routes/event-routes");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/",router);

mongoose.connect("mongodb+srv://mustafa:nNSdYcWr8Xn43vXs@cluster0.b9inqq0.mongodb.net/ems?retryWrites=true&w=majority").then(()=>console.log('Connected to Database')).then(()=>app.listen(5000)).catch((err)=>console.log(err))

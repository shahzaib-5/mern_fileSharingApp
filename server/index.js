const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors");

const fileRoute = require("./routes/fileRoute.js");

const app = express();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database Connected"))
.catch((err)=> console.log("Database not connected", err))

app.use(cors());
app.use("/", fileRoute);
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


//WrqLkDp4RTysxzHC
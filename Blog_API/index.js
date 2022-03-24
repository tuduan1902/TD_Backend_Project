const express = require('express');
const app = express();
const db = require('./config/db');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');
// Connect to DB
db.connect();
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"image")
    },filename:(req,res,cb) => {
        cb(null, req.body.name);
    }
})
const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
// Use
app.use(express.json());
app.use('/api/auth',authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaed")
})
app.listen("5000",() =>{
    console.log("Backend is running.");
})
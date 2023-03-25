const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5500, (err) => {
    if(err) {
    console.log(err.message);
    }
    else console.log("app listening on 5500");
});

// app.get("/"", (req,res) => {
//     res.sendFile(__dirname + "/index.html",(err) => {
//         console.log(err);
//     });
// });

// app.post("/", (req,res) => {
//     var data = req.body;
//     data.age = 90;
//     res.send(data);
// });

const rootRouter = require('./routes/roots');
app.use("/",rootRouter);

const userRouter = require('./routes/users');
app.use('/user',userRouter);

const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose
        .connect(process.env.DB_URL||"mongodb+srv://mpatidar:GTAlQSULi17j8jEh@cluster0.n2ptq.mongodb.net/userDetails?retryWrites=true&w=majority"
,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        .then(() =>{
            console.log("Db Connection Successful");
        })
        .catch((err) => {
            console.log("Db not connected", err);
        });
}

module.exports = dbConnect;
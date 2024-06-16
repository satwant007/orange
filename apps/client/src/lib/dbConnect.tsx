import mongoose from "mongoose";
let alreadyConnected = false;

export async function dbConnection() {
    console.log("Trying to connect to mongo db");

    if(alreadyConnected) { return;}
    
    mongoose.connect('mongodb+srv://satwantthapar:qwertyuiop@cluster0.iwqiqvt.mongodb.net/orangePortfolio?retryWrites=true&w=majority' 
    ,{dbName: "subscribers" }) 
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

    alreadyConnected = true;
}
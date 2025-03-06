import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'Educate',
    }).then((c) => {
        console.log("Database Connected!");
    }).catch((error) => {
        console.log(error);
    });
};
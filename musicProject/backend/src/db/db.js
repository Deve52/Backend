import mongoose from 'mongoose';

const connectDB = ()=>{
 mongoose.connect("mongodb://localhost:27017/musicProject")
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((error)=>{
        console.error("MongoDB connection failed:", error);
    });
}

export default connectDB;
// This code connects to a MongoDB database using Mongoose.
// It exports a function `connectDB` that establishes the connection and logs the result.
// If the connection is successful, it logs a success message; if it fails, it logs an error message.
// The connection string is set to connect to a local MongoDB instance at port 27017 and database `musicProject`.
// Make sure MongoDB is running locally on your machine before executing this code.
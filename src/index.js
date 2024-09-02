// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then((result) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection failed!!", err);
  });

/*
import express from "express";
const app = express()



// IIFE used here

;(async()={
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR", error)
            throw error
        })

app.listen(process.env.PORT,() =>{
    console.log(`App is listening on port ${process.env.PORT}`)
})


    } ,catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})() 

*/

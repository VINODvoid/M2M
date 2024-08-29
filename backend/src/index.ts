import connectDB from "./db";
import dotenv from "dotenv";
import { app } from "./app";
dotenv.config(
    {
        path:"./.env"
    }
);
connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000 , () =>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log(" MongoDB Connection Failed ERROR !!! ", error);
    process.exit(1);
})
import mongoose from "mongoose"
import {DB_NAME } from '../constants'

const connectDB = async() => {
    const mongoURI = process.env.MONGODB_URL as string;
    try{
        const connectionInstance = await mongoose.connect(`${mongoURI}/${DB_NAME}`)
        console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`)
        }
    catch(error){
        console.error(`MongoDB connection Error: ${(error as Error).message}`)
        process.exit(1)
    }
}

export default connectDB
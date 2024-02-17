import mongoose from "mongoose";
const connectToDB = async () => {
    if(mongoose.connections[0].readyState){
        return false;
    }else{
        try {
            await mongoose.connect("mongodb://localhost:27017/Threads")
            console.log("connected to DB Successfuly..")
        } catch (error) {
            console.log("somthing happend.....")
        }
    }
}

export default connectToDB;
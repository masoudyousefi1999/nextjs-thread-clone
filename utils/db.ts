import mongoose from "mongoose";

// const username = "masoudyousefi";
// const password = "MASOUDyo1378";
// const dbName = "threads-clone"; // Replace with your actual database name

// const url = `mongodb+srv://${username}:${password}@cluster0.obv5lkw.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const url = "mongodb://localhost:27017/threads"
const connectToDB = async () => {
    if(mongoose.connections[0].readyState){
        return false;
    }else{
        try {
            await mongoose.connect(url)
            console.log("connected")
        } catch (error : any) {
            console.log(error.message)
        }
    }
}

export default connectToDB;

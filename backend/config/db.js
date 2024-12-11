import mongoose from "mongoose";


export const connectDatabase = async() =>{
    try {
        await mongoose.connect('mongodb+srv://mealYrad:7827225109@cluster0.8w9ks.mongodb.net/food-del');
        console.log("Database connected Succesfully");
    } catch (error) {
        console.log("Not connected : ",error);
    }
}
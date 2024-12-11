import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/db.js';


// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json()); // it is used to convert the data coming from frontend to json;
app.use(cors());

// db connection
connectDatabase();

app.get('/',(req,res) =>{
    res.send("API Working");
})



app.listen(PORT,()=>{
    console.log(`serer is running on http://localhost${PORT}`);  
})
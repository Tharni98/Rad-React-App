const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

// async danne await eka asicronance wenna oni
const db= async () => {
    try {
        const coon = await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB connect to : ${coon.connection.host}`);
    } catch (error) {
        console.error('Mongo DB Connection Error', error)
    }
}
module.exports=db;

import mongoose from 'mongoose';
const connection = async() => {
    try {
        await mongoose.connect(process.env.MongoUrl);
        console.log('MongoDB connected successfully');
      } catch (error:any) {
        console.error('Error connecting to MongoDB:', error.message);
       
        process.exit(1);
      }
}

export default connection

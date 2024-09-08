import mongoose from 'mongoose';

const connectDB = (mongoURL: string) => {
    mongoose.connect(mongoURL)
        .then(() => {
            console.log("Successful ✅✅ connected to DB");
        })
        .catch(error => {
            console.error(error);
        })
};

export default connectDB;
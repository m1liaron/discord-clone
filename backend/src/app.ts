import express from "express";
import connectDB from "./db/connectDB";
import { registerRoutes } from "./helpers/registerRoutes";
import { configDotenv } from "dotenv";
import cors from 'cors';
configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

registerRoutes(app);
connectDB(process.env.MONGO_URI || '');

( async () => {
    try {
        app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    } catch(error) {
        console.error('Error running server:', error);
    }
})();
import express from "express";
import { registerRoutes } from "./helpers/helpers";

const app = express();
const port = process.env.PORT || 3000;

registerRoutes(app);

( async () => {
    try {
        app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    } catch(error) {
        console.error('Error running server:', error);
    }
})();
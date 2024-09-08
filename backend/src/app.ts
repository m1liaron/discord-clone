import express from "express";

const app = express();

const port = process.env.PORT || 3000;

( async () => {
    try {
        app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    } catch(error) {
        console.error('Error running server:', error);
    }
})();
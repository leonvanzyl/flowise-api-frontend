import express from "express";
import bodyParser from "body-parser";
import * as dotevn from "dotenv";
dotevn.config();

// Controllers
import { createPrediction } from "./controllers/flowise.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/flowise", createPrediction);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

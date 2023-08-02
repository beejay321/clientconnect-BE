import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { createServer } from "http";

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongo");
    server.listen(port, () => {
      console.table(listEndpoints(app));
      console.log("Server listening on port " + port);
    });
  });

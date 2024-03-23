import { config } from "dotenv";
config();
import express from "express";
import app from "./app.js";
import connect from "./db/connect.js";

const PORT = process.env.PORT || 8000;
console.log(process.env.API_KEY);

connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

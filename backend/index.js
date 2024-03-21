import { config } from "dotenv";
import express from "express";
import app from "./app.js";
import connect from "./db/connect.js";

const PORT = process.env.PORT || 8000;

connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

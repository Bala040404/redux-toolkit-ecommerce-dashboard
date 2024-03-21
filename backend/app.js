import express from "express";
import loger from "./middleware/loger.js";
import productRouter from "./router/productsRouter.js";
import ApiError from "./utils/apiError.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(loger);
app.use("/api/product", productRouter);

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json(new ApiError(status, err.message));
});
export default app;

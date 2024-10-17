const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const productRouter = require("./routes/productRoutes");
const glErrorMiddleware = require("./middlewares/glErrorMiddleware");

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/products", productRouter);

app.use(glErrorMiddleware);

module.exports = app;

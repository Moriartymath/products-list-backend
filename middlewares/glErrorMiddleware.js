const ExpressError = require("../utils/ExpressError");

const sendDev = (err, res) => {
  if (err instanceof ExpressError)
    res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message, stack: err.stack });
  else
    res.status(500).json({
      status: "error",
      message: err.message,
      stack: err.stack,
      error: err,
    });
};

const sendProd = (err, res) => {
  if (err instanceof ExpressError)
    res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message });
  else
    res.status(500).json({
      status: "error",
      message: "Something very bad happened on the server!",
    });
};

module.exports = (err, req, res, next) => {
  const mode = process.env.NODE_ENV;

  if (mode === "development") sendDev(err, res);
  else if (mode === "production") sendProd(err, res);
};

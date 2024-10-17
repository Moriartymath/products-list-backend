const ExpressError = require("../utils/ExpressError");

const catchAsync = function (controllerFn) {
  return async (req, res, next) => {
    try {
      await controllerFn(req, res, next);
    } catch (error) {
      next(
        error instanceof ExpressError ? error : new ExpressError(error.message)
      );
    }
  };
};

module.exports = catchAsync;

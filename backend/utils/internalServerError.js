const internalServerError = (res) => {
  return res.status(500).json({
    success: false,
    message: "Internal server error. Please try again!",
  });
};

module.exports = internalServerError;

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers("authorization").split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, () => {
        
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failed!",
    });
  }
};

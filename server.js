const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

//*** MIDDLEWARE */
app.use(express.json);
app.use(cors());
app.use(morgan("dev"));

//Dot Config
dotenv.config();

//***** REST OBJECT ****/
const app = express();

//***** ROUTES ****/
//1 test routes
app.use("/api/v1/test", require("./routes/testRoutes"));

//***** PORT *****/
const PORT = process.env.PORT || 8080;

//***** LISTEN ******/
app.listen(PORT, () => {
  console.log("Node Server Running");
});

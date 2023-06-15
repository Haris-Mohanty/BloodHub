const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");


//Dot Config
dotenv.config()

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

const express = require("express");
const env = require("dotenv");

//***** REST OBJECT ****/
const app = express();

//***** ROUTES ****/
//1 test routes
app.use("/api/v1/test", require("./routes/testRoutes"));

//***** PORT *****/
const PORT = 8080;

//***** LISTEN ******/
app.listen(PORT, () => {
  console.log("Node Server Running");
});

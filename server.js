const express = require("express");

//***** REST OBJECT ****/
const app = express();

//***** ROUTES ****/
//1 test routes
app.get("/", (req, res) => {
    res.status(200).json({
      message : "Welcome to BloodHub."
    });
});


//***** PORT *****/
const PORT = 8080;


//***** LISTEN ******/
app.listen(PORT, () => {
  console.log("Node Server Running");
});

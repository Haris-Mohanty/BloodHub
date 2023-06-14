const express = require("express");

//***** REST OBJECT ****/
const app = express();


//***** ROUTES ****/
//1 test routes
app.get("/test");



//***** PORT *****/
const PORT = 8080;

//***** LISTEN ******/
app.listen(PORT, () => {
    console.log("Node Server Running");
});

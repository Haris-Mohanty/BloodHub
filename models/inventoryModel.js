const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    
});

//****** EXPORT *****/
module.exports = mongoose.model("Inventory", inventorySchema);

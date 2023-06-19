//********* CREATE INVENTORY *******/
const createInventoryController = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API!",
      err,
    });
  }
};

module.exports = { createInventoryController };

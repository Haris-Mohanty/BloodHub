const getDonorsListController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API!",
      error,
    });
  }
};

//Export
module.exports = { getDonorsListController };

//******** GET BLOOD DATA *********/
const bloodGroupDetailsController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Blood Group Data Analytics API!",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsController };

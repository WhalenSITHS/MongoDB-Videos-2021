exports.homePage = async (req, res) => {
  const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
  try {
    res.json(stores);
  } catch (error) {
    console.log(error);
  }
};

exports.middlewareSample = (req, res, next) => {
  req.name = "TEST";
  next();
};

exports.homePage = async (req, res) => {
  const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
  try {
    console.log(req.name);
    res.json(stores);
  } catch (error) {
    console.log(error);
  }
};

exports.authMiddleware = async (req, res, next) => {
  if (req.body.user) {
    next();
  } else {
    res.json("You must be signed in");
  }
};

exports.authPage = async (req, res) => {
  try {
    res.json("Secret Data");
  } catch (error) {
    console.log(error);
  }
};

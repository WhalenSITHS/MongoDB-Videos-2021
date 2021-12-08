const mongoose = require("mongoose");
const slugify = require("slugify");
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // " Mike" => "Mike"
    required: "Please Enter a Store Name",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

shopSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});
mongoose.model.exports = mongoose.model("Shop", shopSchema);

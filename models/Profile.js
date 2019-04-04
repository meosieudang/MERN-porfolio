const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  tech: {
    type: [String],
    required: true
  },
  src: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  demo: {
    type: String,
    required: true
  }
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);

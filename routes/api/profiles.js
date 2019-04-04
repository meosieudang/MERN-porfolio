const router = require("express").Router();
const Profile = require("../../models/Profile");

// @route GET api/profiles
// @desc get all profiles
// @access public
router.get("/", (req, res) => {
  Profile.find().then(profiles => res.json(profiles));
});

// @route POST api/profiles
// @desc add new profiles
// @access public
router.post("/", (req, res) => {
  const { name, about, tech, src, img, demo } = req.body;
  const newProfile = new Profile({
    name,
    about,
    tech: tech.split(","),
    src,
    img,
    demo
  });
  console.log(newProfile);
});

module.exports = router;

const router = require("express").Router();
const Profile = require("../../models/Profile");

// @route GET api/profiles
// @desc get all profiles
// @access public
router.get("/", (req, res) => {
  Profile.find()
    .sort({ name: -1 })
    .then(profiles => res.json(profiles));
});

// @route GET api/profiles
// @desc get 1 profiles
// @access public
router.get("/:id", (req, res) => {
  Profile.findById(req.params.id).then(profiles => res.json(profiles));
});

// @route POST api/profiles
// @desc add new profiles
// @access public
router.post("/", (req, res) => {
  const { name, about, tech, src, img, demo } = req.body;
  console.log(req.body);
  const newProfile = new Profile({
    name,
    about,
    tech: tech.split(","),
    src,
    img,
    demo
  });
  newProfile
    .save()
    .then(profile => res.json(profile))
    .catch(err => console.log(err));
});

module.exports = router;

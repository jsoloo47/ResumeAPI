const express = require("express");
const router = express.Router();
const resumeData = require("../resumeData/resume.json");

router.get("/", (req, res) => {
  res.json(resumeData);
});

module.exports = router;

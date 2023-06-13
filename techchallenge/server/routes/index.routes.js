const express = require("express");
const router = express.Router();
const phonesJson = require ("../data/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(phonesJson);
});

router.get("/phones/:id", (req, res, next) => {
  res.json(phonesJson[req.params.id] );
});

module.exports = router;

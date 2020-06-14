const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");


const router = express.Router();
// SEARCH ENDPOINTS
router.get(CONSTANTS.ENDPOINT.SEARCH, (req, res) => { res.json(sampleData); });


module.exports = router;

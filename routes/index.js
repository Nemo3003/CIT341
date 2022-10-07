//@TS-Check
const express = require('express');
const router = express.Router();
const openCors = require("../middleware/openCors");


router.use('/api-docs', require('./swagger'));
router.use('/api-docs/app/contacts', require('./contacts'));

module.exports = router;


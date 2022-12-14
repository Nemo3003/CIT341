//@TS-Check
const express = require('express');
const router = express.Router();
const openCors = require("../middleware/openCors");


router.use('/', require('./swagger'));
router.use('/app/contacts', require('./contacts'));

module.exports = router;


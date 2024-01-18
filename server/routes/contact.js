const express = require('express');
const ContactController = require('../controller/contactController');
const router = express.Router();

router.post('/submit', ContactController.submitContactDetails);


module.exports = router;
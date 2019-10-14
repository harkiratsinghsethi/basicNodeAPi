const controller = require('../controllers/controller.js');

const express = require('express');
const router = express.Router();

router.route('/getData').get(controller.getData);

module.exports = router;

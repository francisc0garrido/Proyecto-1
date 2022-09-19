const express = require('express');
const router = express.Router();

const {
    nosotros
} = require('../controllers/controllersNosotros');

router.get('/', nosotros);


module.exports = router;
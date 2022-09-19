const express = require('express');
const router = express.Router();
const {
    formulario,
    formularioPost
} = require('../controllers/controllersFormulario');


router.get('/', formulario);
router.post('/', formularioPost);




module.exports = router;



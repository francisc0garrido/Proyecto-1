
const conexion = require ('../db/db');

// renderizar get formulario
const formulario = (req, res) => {
    res.render('formulario');
}




    
// renderizar post formulario
const formularioPost = (req, res) => {
    const {nombre, apellido, email} = req.body;

    
        if(nombre == '' || apellido == '' || email == ''){
            let validacion = 'Rellene los campos correctamente..';
            res.render('formulario', {
                titulo: 'Formulario para Empleados',
                validacion
        })
        }else{
            let confirmacion = 'Recibido! Nos contactaremos con usted en los próximos días.';
            conexion.query('INSERT INTO empleados SET ?', {nombre, apellido, email}, 
    (error, results) => {
            res.render('formulario', {
                titulo: 'Formulario para Empleados',
                confirmacion
            })
        }
    )}
    }



            
        



module.exports = {
    formulario,
    formularioPost,
}


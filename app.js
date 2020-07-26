const express  = require('express');
const app = express();
app.listen(3030, () => console.log('Servidor levantado en le puerto 3030'));

const rutasHome = require ('./routes/home');
const rutasSucursales = require ('./routes/sucursales');
const rutasMarcas = require ('./routes/marcas');
const rutasAutos = require ('./routes/autos');



app.use ('/',rutasHome) 
app.use ('/sucursales',rutasSucursales) 
app.use ('/marcas',rutasMarcas) 
app.use ('/autos',rutasAutos) 


app.get('*', (req, res) => {
res.status(404).send('404 not found. <br> ¡Algo Falló, te invitamos a que vuelvas a la página principal y sigas disfrutando de nuestra página!');
});


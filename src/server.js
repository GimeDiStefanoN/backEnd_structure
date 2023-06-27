//requerir modulos

const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

//inicializar express

const app = express();

//configuro archivos estaticos

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../assets/views');

//configuro

app.set('view engine', 'ejs'); //la ingenieria que usamos para las vistas es "ejs"
app.set('views', viewsPath);
const PORT = 3000

// Agregar las rutas

app.use(express.static(publicPath)); //indico que todo lo estatico va estar en la direccion "public" (inicializamos valores y los paso al app)
app.use(bodyParser.urlencoded({extended: false})); //indico que  vamos a usar bodyparser (inicializamos valores y los paso al app)
routes(app);

//inicio servidor

app.listen(PORT, ()=> console.log(`Port runing in http://localhost:${PORT}!`));
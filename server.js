const express = require('express')
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");//Requiero archivo js HELPERS


app.use(express.static(__dirname + "/public"));//middleware
 
const port = process.env.PORT || 3000;


hbs.registerPartials( __dirname + "/views/parciales");
app.set("view engine","hbs");//HBS


app.get('/',(req, res) => {//Configurando una solicitud get cuando el path sea "/"

  //res render, renderiza el sitio web, Haciendo una web con info dinamica
  res.render("home",{
    nombre: "Luciano",
  });//Detecta que es un objeto y lo desliza a formato json
});
app.get('/about',(req, res) => {//Configurando una solicitud get cuando el path sea "/"

  //res render, renderiza el sitio web, Haciendo una web con info dinamica
  res.render("about",{
    nombre: "Luciano",
  });//Detecta que es un objeto y lo desliza a formato json
});


 
app.listen(port, ()=>{
  console.log(`Escuchando a tu perra ${port}`)
});
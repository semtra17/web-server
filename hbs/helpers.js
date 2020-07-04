const hbs = require("hbs");
 
//EXPRESS HBS engine
hbs.registerHelper("getAnio",()=>{
  return new Date().getFullYear();
});//Ayuda a resumir nuestro codigo, manejando funciones con solo llamarlas dentro del codigo html


hbs.registerHelper("capitalizar", (texto)=>{
  let palabras = texto.split(" ");
  palabras.forEach((palabra,idx)=>{
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(" ");
})

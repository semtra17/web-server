const http= require("http");

http.createServer((req,res)=>{//Conexion al puerto

    res.writeHead(200,{"Content-Type":"application/json"});//Para que devuelva archivo json


    let salida = {
        nombre:"luciano",
        edad:23,
        url:req.url,
    }
    res.write(JSON.stringify(salida));
    // res.write("hola mundo");
    res.end();//, error comun es no determinar el final de la conexion


})
.listen(8080);//Puerto
    

console.log("Escuchando el puerto 8080");



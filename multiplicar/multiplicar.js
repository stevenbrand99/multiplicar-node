let fs = require("fs");
const colors = require('colors');

let listarTabla = (base,limite) =>{
  return new Promise((resolve,reject)=>{
    if(!Number(base) || !Number(limite)){
      reject('Los parametros deben ser numeros enteros')
    }else{
      let resultado = '';
      for(let i = 1;i<=limite;i++){
        resultado += `${base} * ${i} = ${base*i}\n`;
      }
      resolve(resultado)
    }
  })
}



let crearArchivo = (base,limite) => {
  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject(`El valor ${base} no es un numero`)
      return;
    }

    let data = "";

    for (let index = 1; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index} \n`;
    }

    // const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
      if (err) 
        reject(err);
      else
        resolve(`tabla-${base}-al-${limite}.txt`.magenta);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}
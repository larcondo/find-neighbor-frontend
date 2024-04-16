import crypto from 'crypto'

const cantidad = 17;
const arreglo = [];

for(let i = 0; i < cantidad; i ++) {
  arreglo.push(crypto.randomBytes(4).toString('hex'))
}


console.log('generarIds');
console.log(arreglo);
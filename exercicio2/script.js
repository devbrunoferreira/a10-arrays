///////////////////////////// EXERCÍCIO 2 ///////////////////////////////

console.log('QUANTIDADE DE ITENS ARRAY 1');
const numeros = [2002, 1970, 1958, 1994, 1962];
console.log(numeros.length);
console.log('');

console.log('QUANTIDADE DE ITENS ARRAY 2');
const paises = ['Brasil', 'França', 'Alemanha', 'Argentina', 'Espanha'];
console.log(paises.length);
console.log('');

console.log('QUANTIDADE DE ITENS ARRAY 3');
const mix = ['Bruno', 31, true, 45, 'Ferreira', 1991, false];
console.log(mix.length);
console.log('');

console.log('1º ITEM DO PRIMEIRO ARRAY');
console.log(numeros[0]);
console.log('');

console.log('2º ITEM DO SEGUNDO ARRAY');
console.log(paises[1]);
console.log('');

console.log('3º ITEM DO TERCEIRO ARRAY');
console.log(mix[2]);
console.log('');

console.log('TRUE OR FALSE');
console.log(`O array números inclui o número 2002: ${numeros.includes(2002)}`);
console.log(`O array países inclui a palavra Bélgica: ${paises.includes('Bélgica')}`);
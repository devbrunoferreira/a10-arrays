////////////////////////////// EXERCÍCIO 3 /////////////////////////////////

const array = ['English', 9, 'Español', 1991, 3, 'Duda', 'Wanessa'];

const arrayCopia1 = array.slice();
console.log('ARRAY ORIGINAL', array);
arrayCopia1.push(10);
console.log('ARRAY CÓPIA 1', arrayCopia1);
console.log('');

const arrayCopia2 = array.slice();
console.log('ARRAY ORIGINAL', array);
arrayCopia2.pop();
console.log('ARRAY CÓPIA 2', arrayCopia2);
console.log('');

const arrayCopia3 = array.slice();
console.log('ARRAY ORIGINAL', array);
arrayCopia3.splice(1, 1);
console.log('ARRAY CÓPIA 3');
console.log(arrayCopia3);
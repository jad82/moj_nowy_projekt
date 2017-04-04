// plik scripts.js - sprawdzanie, czy wynik jest dodatni, czy ujemny
var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
value = (a * a) + (2 * a * b) - (b * b)
console.log('Sprawdzenie wartości')
var positiveNegative = (value < 0) ? alert('wartość ujemna') : alert('Wartość dodatnia')
console.log('Sprawdzenie warunku i podanie informacji o wyniku, który wynosi'+ value); 
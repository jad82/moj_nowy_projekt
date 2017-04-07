var a = prompt('Podaj wartość podstawy');
var h = prompt('Podaj wartość wysokości');
function getTriangleArea(a,h) {
    if (a <= 0 || h <= 0) {
            return 'nieprawidłowe dane';
    }
    return a * h / 2;
};
var result = getTriangleArea(a,h);
alert ('wynik działania brzmi ' +result)

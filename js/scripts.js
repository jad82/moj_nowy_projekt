var a = prompt('Podaj wartość podstawy'),
	h = prompt('Podaj wartość wysokości');
triangleArea = a * h / 2
function getTriangleArea(a,h) {
	if (a <= 0 || h <= 0) {
			return alert('nieprawidłowe dane')
	} else {
	triangleArea = a * h / 2
	}
	return alert('Wynik działania to: '+triangleArea) 
}
alert('Wynik działania to: '+triangleArea) 
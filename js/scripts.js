
//zmienne
var a = prompt('Podaj pierwszą liczbę'),
	b = prompt('Podaj drugą liczbę'),
	wynikDzialania = (a * a) - (2 * a * b) - (b * b);

//wyskakujacy alert z wynikiem
document.write('Działanie: (a * a) - (2 * a * b) - (b * b)= ' + wynikDzialania);	
//zapis w consoli
console.log('Wynik działania: ' + wynikDzialania);


// instrukcje warunkowe
if ( wynikDzialania > 0) {
	console.log('Wynik działania jest dodatni!');
} else if ( wynikDzialania < 0) {
	console.log('Wynik działania jest ujemny!');
} else {
	console.log('Wynik działania jest równy 0');
	}
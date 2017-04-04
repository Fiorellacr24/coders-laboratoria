var prom4Chile, prom5Lim, prom6Lim, select, style;

prom4Chile = document.getElementById('4tapromch');
prom5Lim = document.getElementById('5tapromlim');
prom6Lim = document.getElementById('6tapromlim');

select = document.getElementById('select');

select.onchange = function (){
	if (select.value == "prom4Chile") {
		mostrar();
		prom4Chile.style.display ='block';
	}else if (select.value == "prom5Lim") {
		mostrar();
		prom5Lim.style.display ='block';
	}else if (select.value == "prom6Lim") {
		mostrar();
		prom6Lim.style.display ='block';
	}
}

function mostrar(){
	prom4Chile.style.display='none';
	prom5Lim.style.display='none';
	prom6Lim.style.display='none';
}
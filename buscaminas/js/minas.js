//1 = Bomba - 0 = Libre
var campo = [ [1,0,0],
			  [0,1,0],
			  [1,1,1] ];

var textos = ["Cesped", "Bomba"];
var x, y, opc, res, e;

function perder()
{
	alert("KA-BOOOM");
}

function ganar()
{
	alert("YOU ROCK!! Ganaste!");
}

function getIndex(id)
{
	
	z = id.split(',');
	x = z[0];
	y = z[1];
	opc = campo[x][y];

	if(x <= 2 && y <=2){
		if(opc == 1){
			perder();
			res = 'Y ha sido tu perdión, estas Muerto!!';
			e = document.getElementsByName('bom');
			for (var i = 0; i < e.length; i++) {
				e[i].className = 'boom';
			};

		}else{
			ganar();
			res = 'Y sigues vivo, pero por ¿Cuánto más?';
		}
	}
	document.getElementById('resultado').innerHTML='Elegiste un campo con: '+ textos[opc] +' <br /><strong>' + res + '</strong>';
}
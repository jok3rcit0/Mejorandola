var opciones = {
	"piedra"  :0,
	"papel"	  :1,
	"tijeras" :2,
	"lagarto" :3,
	"spock"	  :4 
};

var opcUsuario = 0;
var opcMaquina = 0; 
var resultado  = '';

function random(min, max){
	//Math.floor redondea el numero hacia abajo en su entero más proximo
	//Math.random regresa un numero entre 0 y 0.99999999 :P
	//se genera un numero 0.xxx se multiplica por el resultado de max-min+1 y se redondea con floor
	//Math.random() * (max - min + 1) + min el + min no es necesario en este caso
	var num = Math.floor( Math.random() * (max - min + 1) + min);
	return num;
}

function juego(opcUsuario, opcMaquina){
	if(opcUsuario == opcMaquina){
		resultado = 'Empate';
	}else if(opcUsuario == opciones.piedra  && (opcMaquina == opciones.papel 	|| opcMaquina == opciones.spock)){
		resultado = 'Perdiste';
	}else if(opcUsuario == opciones.papel   && (opcMaquina == opciones.tijeras 	|| opcMaquina == opciones.lagarto)){
		resultado = 'Perdiste';
	}else if(opcUsuario == opciones.tijeras && (opcMaquina == opciones.spock 	|| opcMaquina == opciones.piedra)){
		resultado = 'Perdiste';
	}else if(opcUsuario == opciones.lagarto && (opcMaquina == opciones.piedra 	|| opcMaquina == opciones.tijeras)){
		resultado = 'Perdiste';
	}else if(opcUsuario == opciones.spock 	&& (opcMaquina == opciones.lagarto 	|| opcMaquina == opciones.papel)){
		resultado = 'Perdiste';
	}else if(opcUsuario == opciones.piedra  && (opcMaquina == opciones.tijeras  || opcMaquina != opciones.lagarto)){
		resultado = 'Ganaste';
	}else if(opcUsuario == opciones.papel   && (opcMaquina == opciones.piedra   || opcMaquina == opciones.spock)){
		resultado = 'Ganaste';
	}else if(opcUsuario == opciones.tijeras && (opcMaquina == opciones.papel    || opcMaquina == opciones.lagarto)){
		resultado = 'Ganaste';
	}else if(opcUsuario == opciones.lagarto && (opcMaquina == opciones.spock    || opcMaquina == opciones.papel)){
		resultado = 'Ganaste';
	}else if(opcUsuario == opciones.spock 	&& (opcMaquina == opciones.tijeras  || opcMaquina == opciones.piedra)){
		resultado = 'Ganaste';
	}else{
		resultado = 'Algo salio mal';
	}

	return resultado;
}

function juegoFull(){
	opcMaquina = random(0, 4);
	opcUsuario = document.getElementById('opciones').selectedIndex;
	nombreU = document.getElementsByTagName("option")[opcUsuario].value;
	nombreM = document.getElementsByTagName("option")[opcMaquina].value;
	resultado = juego(opcUsuario, opcMaquina);
	document.getElementById('resultados').innerHTML='Elejiste: '+nombreU+' <br />La maquina elijio: '+nombreM+' <br /><strong>¡'+resultado+'!</strong>';
	if(resultado === 'Ganaste'){alert("YOU ROCK! Ganaste!!");}
	console.log(opcUsuario + " < usuario - maquina >" + opcMaquina + " y el resultado es: " + resultado);
}
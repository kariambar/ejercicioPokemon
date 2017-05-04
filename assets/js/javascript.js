
function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return('Hola, soy: ' + this.nombre + 'y soy de color: ' + this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
		return('El nuevo nivel de amistad de: ' + this.nombre + 'es: ' + this.nivelDeAmistad);
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return('Este es un nuevo ataque de :' + pokemon.vida);
	}
}

	var Pikaxu = new Pokemon('Pikaxu','amarillo',100);
	var Charmander = new Pokemon('Charmander','rojo',50);

	Pikaxu.atacar(Charmander);
	console.log(Charmander.vida);


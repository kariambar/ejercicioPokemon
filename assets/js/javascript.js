function Pokemon(nombre, color){
	this.nombre = nombre;
	this.color = color
	this.nivelDeAmistad = 0

	this.mostrarPokemon = function(){
		return('Hola, soy: ' + this.nombre + 'y soy de color: ' + this.color)
	}

	this.aumentarActividad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
}
function Pokemon(nombre,color,puntosAtaque) {
    this.nombre = nombre;
    this.color = color;
    this.nivelDeAmistad=0;
    this.vida=100;
    this.puntosAtaque = puntosAtaque;

    this.saludar = function () {
        console.log("Hola, me llamo " + this.nombre);
    };

    this.pelear = function (pokemonObjeto) {
        pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
    };

    this.beber = function (tipoAlcohol) {
        if(tipoAlcohol== "chelas"){
            this.nivelDeAmistad+= 80;
        }else if (tipoAlcohol == "vodka"){
            this.nivelDeAmistad+=10;
        }
    };
}

var pokemons = [];

function crearPokemon() {
    var nombrepokemon = document.getElementById("nombrePokemon");
    var colorpokemon = document.getElementById("colorPokemon");
    var puntosataque = document.getElementById("puntosAtaque");

    var pokemon = new Pokemon (nombrepokemon.value,
                               colorpokemon.value,
                               parseInt(puntosataque.value)
                               )
    pokemons.push(pokemon);
    console.log(nombrepokemon.value);
    mostrarPokemons();
    mostrarPokemons2();

}

function mostrarPokemons() {
    var listaPokemons = document.getElementById("listaPokemons");
    listaPokemons.innerHTML=""
    
    pokemons.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML =pokemon.nombre; 
        listaPokemons.appendChild(elemento);
    });
}

function mostrarPokemons2() {
    var listaPokemons2 = document.getElementById("listaPokemons2");
    listaPokemons2.innerHTML="";
    
    pokemons.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML =pokemon.nombre; 
        listaPokemons2.appendChild(elemento);
    });
}
function peleaPokemon() {
    var pokemon2=document.getElementsByTagName("select")[1].value;
    var pokemon1=document.getElementsByTagName("select")[0].value;
    var campo=document.getElementById("campo");
    var pokemon11={};
    var pokemon22={};
    pokemons.filter(function(pokemon) {
        if (pokemon.nombre==pokemon1){
            pokemon11=pokemon;
        }
    })
    pokemons.filter(function(pokemon) {
        if (pokemon.nombre==pokemon2){
            pokemon22=pokemon;
        }
    })
    pokemon11.pelear(pokemon22);
    campo.innerText="A "+pokemon22.nombre+" le queda "+pokemon22.vida+" de vida ";
    console.log(pokemon11);

   

   // pokemons.filter(function(pokemon){if(pokemon.nombre==pokemon1){alert(pokemon.nombre);}}


   
}

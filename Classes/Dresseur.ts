import Pokemon from "../Interfaces/Pokemon";

export default class Dresseur {
    /* Attribut de la class */
    _nom: string;

    /* Méthodes de la class */
    ajouterPokeballs() {
        console.log(`Le dresseur ${this._nom} ajoute une ou plusieurs Pokeballs`);
    }

    capturer(Pokemon: Pokemon) {
        console.log(`Le dresseur ${this._nom} a capturé ${Pokemon}`)
    }

    getPokemons() {
        console.log(`Le dresseur ${this._nom} possède tout ces Pokemons`) 
    }
}
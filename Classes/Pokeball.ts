import Pokemon from "../Interfaces/Pokemon";
import Dresseur from "./Dresseur";

export default class Pokeball {
    /* Attributs de la class */
    _contient!: Pokemon;
    _proprietaire!: Dresseur;

    /* Méthodes de la class */
    getContenu() {
        console.log(`La Pokeball contient ${this._contient}`)
    }

    AffecterPokemon() {
        console.log(`La Pokeballappartient à ${this._proprietaire}`) 
    }
}
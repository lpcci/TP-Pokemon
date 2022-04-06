import Pokemon from "../Interfaces/Pokemon";
import Dresseur from "./Dresseur";

export default class Pokeball {
    _contient!: Pokemon;
    _proprietaire!: Dresseur;

    getContenu() {
        console.log(`La Pokeball contient ${this._contient}`)
    }

    AffecterPokemon() {
        console.log(`La Pokeballappartient à ${this._proprietaire}`) 
    }
}
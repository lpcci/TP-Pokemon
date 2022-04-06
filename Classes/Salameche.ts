import Pokemon from "../Interfaces/Pokemon";
import { TypeFeu } from "./TypeFeu";

/* La classe Salameche hérite de l'interface Pokemmon ainsi que de l'abstract TypeFeu */
export default class Salameche extends TypeFeu implements Pokemon {
    /* Atributs héritées de l'interface Pokemon */
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    /* Méthodes héritées de l'interface Pokemon */
    attaquer() {
        console.log("Je suis Salameche et j'attaque")
    }

    subirAttaque() {
        console.log("Je suis Salameche et je subis une attaque")
    }

    soigner() {
        console.log("Je suis Salameche et je dois être soigné")
    }

    renommer() {
        console.log("Je suis Salameche et je peux être renommé")
    }
}
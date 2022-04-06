import Pokemon from "../Interfaces/Pokemon";
import { TypePlante } from "./TypePlante";

/* La classe Bulbizarre hérite de l'interface Pokemmon ainsi que de l'abstract TypePlante */
export default class Bulbizarre extends TypePlante implements Pokemon {
    /* Atributs héritées de l'interface Pokemon */
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    /* Méthodes héritées de l'interface Pokemon */
    attaquer() {
        console.log("Je suis Bulbizarre et j'attaque")
    }

    subirAttaque() {
        console.log("Je suis Bulbizarre et je subis une attaque")
    }

    soigner() {
        console.log("Je suis Bulbizarre et je dois être soigné")
    }

    renommer() {
        console.log("Je suis Bulbizarre et je peux être renommé")
    }
}
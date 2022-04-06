import { TypeEau } from "../Abstract/TypeEau";
import Pokemon from "../Interface/Pokemon";

/* La classe Carapuce hérite de l'interface Pokemmon ainsi que de l'abstract TypeEau */
export default class Carapuce extends TypeEau implements Pokemon {
    /* Atributs héritées de l'interface Pokemon */
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    /* Méthodes héritées de l'interface Pokemon */
    attaquer() {
        console.log("Je suis Carapuce et j'attaque")
    }

    subirAttaque() {
        console.log("Je suis Carapuce et je subis une attaque")
    }

    soigner() {
        console.log("Je suis Carapuce et je dois être soigné")
    }

    renommer() {
        console.log("Je suis Carapuce et je peux être renommé")
    }
}
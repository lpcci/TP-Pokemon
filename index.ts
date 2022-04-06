import Carapuce from "./Classes/Carapuce"
import Salameche from "./Classes/Salameche"
import Bulbizarre from "./Classes/Bulbizarre"
import Dresseur from "./Classes/Dresseur"
import Pokeball from "./Classes/Pokeball"

/* Appel des méthodes pour afficher en console */
const carapuce = new Carapuce(256);
carapuce.attaquer();
carapuce.subirAttaque();
carapuce.soigner();
carapuce.renommer();
carapuce.attaquerFeu();
carapuce.attaquerEau();
carapuce.attaquerPlante();

/* Appel des méthodes pour afficher en console */
const salameche = new Salameche(122);
salameche.attaquer();
salameche.subirAttaque();
salameche.soigner();
salameche.renommer();
salameche.attaquerFeu();
salameche.attaquerEau();
salameche.attaquerPlante();

/* Appel des méthodes pour afficher en console */
const bulbizarre = new Bulbizarre(98);
bulbizarre.attaquer();
bulbizarre.subirAttaque();
bulbizarre.soigner();
bulbizarre.renommer();
bulbizarre.attaquerFeu();
bulbizarre.attaquerEau();
bulbizarre.attaquerPlante();

/* Appel des méthodes pour afficher en console */
const dresseur = new Dresseur()
dresseur.ajouterPokeballs();
dresseur.capturer(carapuce);
dresseur.getPokemons();

/* Appel des méthodes pour afficher en console */
const pokeball = new Pokeball()
pokeball.getContenu();
pokeball.AffecterPokemon();
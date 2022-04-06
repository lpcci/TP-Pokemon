export default interface Pokemon {
    /* Attributs de l'interface */
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    /* Méthode de l'interface */
    attaquer();
    subirAttaque();
    soigner();
    renommer();
}
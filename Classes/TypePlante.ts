import Type from "../Interfaces/Type";

export abstract class TypePlante implements Type{
    _degats: number;

    constructor(degats: number) {
        this._degats = degats;
    }

    /* Getter pour récupérer notre propriété de classe */
    public get degats(): number {
        return this._degats;
    }

    /* Setter pour l'affectation de valeur sur notre propriété de classe */
    public set degats(degats: number) {
        this._degats = degats;
    }

    /* Méthode héritée de l'interface Type */
    attaquerFeu() {
        console.log(`TypePlante inflige ${this._degats}pv de degats pour AttaquerFeu`);
    }

    attaquerEau() {
        console.log(`TypePlante inflige ${this._degats}pv de degats pour AttaquerEau`)
    }

    attaquerPlante() {
        console.log(`TypePlante inflige ${this._degats}pv de degats pour AttaquerPlante`)
    }
}
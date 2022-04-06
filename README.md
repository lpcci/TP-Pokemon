#TP-Pokemon

1. Le diagramme respecte-t-il le principe de responsabilité unique ? (1 point)
Oui

2. Pourquoi ? (1 point)
Puisque le tout est séparé. Chaque interface, abstract et class ont leur propre fichier. Tout n'est pas rassemblé au même endroit.   

3. Le diagramme respecte-t-il le principe Open/Closed ? (1 point)
Oui

4. Pourquoi ? (1 point)
Parce qu'il montre par exemple que les abstract implementent l'interface Type et que les class (Carapuce, Salameche et Bulbizarre) sont une extension de leur astract respectif (Carapuce → TypeEau, ect...).

5. Le diagramme respecte-t-il le principe de substitution de Liskov ? (1 point)
Oui

6. Pourquoi ? (1 point)
Parce que chaque Pokemon peut attaquer, subir une attaque, soigner, se faire renommer.

7. Le diagramme respecte-t-il le principe de ségrégation des interfaces ? (1 point)
Oui

8. Pourquoi ? (1 point)
Parce que chaque méthodes est importante, aucunes n'est inutile pour aucuns de nos Pokemons

9. Le diagramme respecte-t-il le principe d'inversion des dépendences ? (1 point)
Oui

10. Pourquoi ? (1 point)
Parce qu'un abstract separe les class (Carapuce, Salameche et Bulbizarre), elles ne sont pas en relation directe avec l'interface Type. Les abstract (TypeEau, TypeFeu et TypePlante) font office d'entre deux pour leur permettre de communiquer. 

11. Proposez un diagramme alternatif (2 point)
@startuml

skinparam classAttributeIconSize 0

interface Pokemon {  
  nom!: str  
  pv: num  
  pvMax: num  
  type: str  
  captif: bool  
  horsJeu: bool  
  attaquer()  
  subirAttaque()  
  soigner()  
  renommer()
}

interface Type {  
  degats: num  
  attaquerFeu() 
  attaquerEau()
  attaquerPlante()
}

abstract class TypeFeu {}

abstract class  TypeEau {}

abstract class  TypePlante {}

class Salameche {}

class Bulbizarre {}

class Carapuce {}

note bottom: constructor : pvMax, degats

class Pokeball {  
  contient!: Pokemon  
  proprietaire!: Dresseur  
  getContenu()  
  affecterPokemon()
}

class Dresseur {  
  nom: str  
  ajouterPokeballs( )  
  capturer(Pokemon)  
  getPokemons()
}

TypeFeu -up-|> Type
TypeEau -up-|> Type
TypePlante -up-|> Type

Salameche -up-|> TypeFeu
Carapuce -up-|> TypeEau
Bulbizarre -up-|> TypePlante

Salameche --|> Pokemon
Carapuce --|> Pokemon
Bulbizarre --|> Pokemon

Dresseur "1" -- "0..6" Pokeball
Pokeball "1" -- "0..1" Pokemon

@enduml

12. Déposez votre projet sur github et précisez le lien (1 point)

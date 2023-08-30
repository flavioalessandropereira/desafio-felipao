//classe 
class Personagem{
  constructor(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar(){
    let attack;

    switch (this.type){
      case "Mago":
        attack = "magia";
        break;
      case "Guerreiro":
        attack = "Espada";
        break;
        case "Ninja":
          attack = "Shuriken";
          break;
        case "Arqueiro":
          attack = "Flechas envenenadas";
          break;        
        
        
      default:
        attack = "um golpe feroz"
    }



    console.log(`O ${this.type} atacou usando ${attack}`)
  }
}

//instanciar a classe Personagem
let warrior1 = new Personagem("Arcanjosoft", "35","Mago" )
let warrior2 = new Personagem("Naruto", "18","Ninja" )
let warrior3 = new Personagem("Arqueiro Verde", "80","Arqueiro" )
let warrior4 = new Personagem("Conan Bárbaro", "26","Guerreiro" )

//chamar o método Atacar
warrior1.atacar()
warrior2.atacar()
warrior3.atacar()
warrior4.atacar()
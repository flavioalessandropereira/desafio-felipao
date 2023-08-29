function result(victory,loss){
  level = victory - loss
  powerMain()
}


function powerMain(){

  if (level < 10){
    power="Ferro"
  }
  else if (level >= 11 && level <=20){
    power="Bronze"
  }
  else if (level >= 21 && level <= 50){
    power = "Prata"
  }
  else if (level >= 51 && level <= 80){
    power = "Ouro"
  }
  else if (level >= 81 && level <= 90){
    power="Diamente"
  }
  else if (level >= 91 && level <= 100){
    power = "Lendário"
  }
  else{
    power = "Imortal"
  }
}

let player = "Arcanjosoft"
result(70,5)

console.log(`O Herói ${player} tem de saldo de ${level} vitórias e está no nível ${power}`)

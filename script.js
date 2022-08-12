// Arrays bidimensional 
const shipsStation = [
    ["Millenion Falcon", 13, true],
    ["Agles Mad", 2, false],
    ["Thor OdinSon", 5, true],
    ["IronMan", 3, false],
    ["Vegito", 1, true],
    ["Power Rangers", 6, true]
]; //o parametro booleano é se a nada esta engatada ou não

// essa variavel filtra as naves que possuem mais de 9 tribulantes
let reduceCrew = shipsStation.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
});

// essa variavel retorna se a nave esta engatada ou não
let plataformShip = shipsStation.findIndex(spaceship => {// o findIndex trás o primeiro elemento index que satisfaz nosso callback
    return spaceship[2] == false
});

// essa variavel transforma os nomes das naves em letras maiusculas
let lightedShip = shipsStation.map(spaceship => {
    return spaceship[0].toUpperCase()
});

// essa variavel tem a mesagem que vair ser imprimida na tela
let message = "Espaçonave com mais de 9 tripulantes: " + reduceCrew.join(" , ") //join introduz a separação como padrão a separação utilizada é a virgula. (,)
message += "\nPlataforma com processo de engate: " + (plataformShip + 1)
message += "\nEspaçonave destacada: " + lightedShip.join(" , ")

alert(message);
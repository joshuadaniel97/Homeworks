// Javascript Classes and Constructor lesson
class PlayerProfile{
    #weight;
    constructor(name, height, weight, position, country){
        this.name = name;
        this.height = height;
        this.#weight = weight;
        this.position = position;
        this.country = country;
    }
    showPlayerName(){
        return "Players Name:", this.name
    }
    showPlayerPosition(){
        return (this.position)
    }
    sport = "Basketball"
}

let player1 = new PlayerProfile("Lebron James", "6'9", "113kg", "Foward", "USA" )

console.log(player1)
console.log(player1.showPlayerPosition())

class Cars {
    brand = "Mercedes"
    #driver = "Lewis Hamilton" // "#" makes the key value "Private"
    horsePower = 566

    showDriver(){
        return this.#driver
    }
}

let f1car = new Cars()
console.log(f1car.showDriver())
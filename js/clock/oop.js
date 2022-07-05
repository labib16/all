class Animals {
    constructor(name,specie){
        this.name = name;
        this.specie = specie;
    }

    sing(){
        return `${this.name} Can Sing`
    }
    dance(){
        return `${this.specie} Can Dance`
    }
}
let bingo = new Animals('Bingo', 'Hairy')
console.log(bingo.sing());
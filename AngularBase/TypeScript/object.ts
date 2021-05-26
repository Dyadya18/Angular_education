interface VladOsInterface {
    name: string,
    surname: string,
    age: number,
    status: string
    id?:number
    getDateBirth: () => number
}

let VladOS: VladOsInterface = {
    name: "Vlad",
    surname: "Ocheretnyi",
    age: 21,
    status: "Drink Coffe",
    getDateBirth(){
        return Date.now() - this.age
    }
}
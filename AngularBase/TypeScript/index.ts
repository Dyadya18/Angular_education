let str: string = "Qwerty"
let numb: number = 3
let bool: boolean = true

let arr: string[] = ["e", "er"]
let arr1: Array<number> = [1,3,4,2,4]

output("Vlad", 13)

function output(a:string, b:number) :void{
    console.log(`This is ${a}: ${b}`)
}

function calc(a: number, b: number | string): number {
    if (typeof b === "string") b = +b;
    return a + b;
}

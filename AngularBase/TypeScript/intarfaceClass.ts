interface IntarfaceClass {
    name: string,
    age: number,
    getInfo: () => string
}

class Vlad implements IntarfaceClass{
    public name: string
    public age: number
    protected date: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    public getInfo(){
        return this.name+ " " + this.age
    }
    private setDate(){
        this.date = Date.now() - this.age
    }
}
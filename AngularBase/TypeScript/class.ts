class Server {
    static VERSION = "1.5.7"

    public name:string
    protected ip:number

    status: string = "working"
    constructor(name:string, ip:number) {
        this.name = name,
        this.ip = ip
    }

    turnOn(){
        this.status = "working"
    }
    turnOff(){
        this.status = "offing"
    }
    hetStatus(): string{
        return  this.status
    }
}
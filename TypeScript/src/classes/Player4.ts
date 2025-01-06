export class Player4 {

    constructor(
        public name: string,
        private age: number,
        readonly country: string
    ) { }

    play() {
        console.log(`${this.name} from ${this.country} is playing!`)
    }
}
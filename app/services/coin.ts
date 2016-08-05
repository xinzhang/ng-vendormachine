export abstract class Coin {
    constructor(public value: number) {
    }
    protected imgPath = "./app/img/";
    abstract getImageUrl(): string;
}

export class Dime extends Coin {
    constructor() {
        super(.1);
    }
    getImageUrl () {
        return this.imgPath + "Dime.png";
    }
}

export class Quarter extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl () {
        return this.imgPath + "Quarter.png";
    }
}

export class Half extends Coin {
    constructor() {
        super(.5);
    }
    getImageUrl () {
        return this.imgPath + "Half.png";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl () {
        return this.imgPath + "Dollar.jpg";
    }
}






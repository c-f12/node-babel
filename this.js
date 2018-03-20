function Circle(x,y){
    this.x = x;
    this.y = y;

    this.point = function() {
        console.log(this);
        console.log(`Point: ${this.x}`);
    };

    this.point = () => {
        console.log(`Point: ${this._called}`);
    }
}

const circle = new Circle(3,4);

//aquí this guarda referencia al circle
circle.point();

//aquí this es setTimeout:
setTimeout(circle.point, 1000);

setTimeout(circle.point.bind(circle), 1000);

setTimeout(circle.point.bind(this), 1000);



//Usando arrow functions evitamos el problema del this:
function Circle(x,y){
    this.x = x;
    this.y = y;

    this.point = () => {
        console.log(this);
        console.log(`Point: ${this.x}`);
    };
}

const circle = new Circle(3,4);
setTimeout(circle.point, 1000);
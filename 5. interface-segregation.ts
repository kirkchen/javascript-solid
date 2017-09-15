module Liskov {
    interface IShape {
        area();
    }

    class Circle implements IShape {
        type = 'Circle';

        constructor(public radius) { }

        area() {
            let area = this.radius * 2 * 3.14;

            return area;
        }
    }

    class Reactangle {
        type = 'Reactangle';

        constructor(public length, public width) { }

        area() {
            let area = this.width * this.length;

            return area;
        }
    }

    class Square extends Reactangle {
        type = "Square";

        constructor(public length) {
            super(length, length);
        }
    }

    class AreaCalculator {
        Calculate(shapes) {
            let sum = 0;

            for (let shape of shapes) {
                let area = shape.area();
                sum += area;
            }

            return sum;
        }
    }

    let shapes = [
        new Circle(5),
        new Reactangle(2, 4),
        new Square(3)
    ]

    let calculator = new AreaCalculator();
    let result = calculator.Calculate(shapes);
    console.log(result);
}
module OpenClose {
    class Circle {
        type = 'Circle';

        constructor(public radius) { }

        area() {
            let area = this.radius * this.radius * 3.14;

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

    class AreaCalculator {
        Calculate(shapes) {
            let sum = 0;

            for (let shape of shapes) {
                let area = shape.area();
                sum += area;
            }

            // let sum = shapes.reduce((s, v) => s += v.area(), 0)

            return sum;
        }
    }

    let shapes = [
        new Circle(5),
        new Reactangle(2, 4),
        new Reactangle(3, 3)
    ]

    let calculator = new AreaCalculator();
    let result = calculator.Calculate(shapes);
    console.log(result);
}
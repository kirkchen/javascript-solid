module OpenClose {
    class Circle {
        type = 'Circle';

        constructor(public radius) { }

        area() {
            let area = this.radius * 2 * 3.14;

            return area;
        }
    }

    class Square {
        type = 'Square';

        constructor(public length) { }

        area() {
            let area = this.length * this.length;

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
        new Square(4),
        new Square(2)
    ]

    let calculator = new AreaCalculator();
    let result = calculator.Calculate(shapes);
    console.log(result);
}
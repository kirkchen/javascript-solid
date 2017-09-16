module Single {
    class Circle {
        type = 'Circle';

        constructor(public radius) { }
    }

    class Reactangle {
        type = 'Reactangle';

        constructor(public length, public width) { }
    }

    class AreaCalculator {
        Calculate(shapes) {
            let sum = 0;
            for (let shape of shapes) {
                if (shape.type == 'Circle') {
                    let area = shape.radius * shape.radius * 3.14;
                    sum += area;
                }
                else if (shape.type == 'Reactangle') {
                    let area = shape.width * shape.length;
                    sum += area;
                }
            }

            return sum;
        }
    }

    let shapes = [
        new Circle(5),
        new Reactangle(2, 4),
        new Reactangle(3, 3)
    ]

    let calculator = new AreaCalculator();
    calculator.Calculate(shapes);
}
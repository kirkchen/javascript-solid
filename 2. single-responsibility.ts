module Single {
    class Circle {
        type = 'Circle';

        constructor(public radius) { }
    }

    class Square {
        type = 'Square';

        constructor(public length) { }
    }

    class AreaCalculator {
        Calculate(shapes) {
            let sum = 0;
            for (let shape of shapes) {
                if (shape.type == 'Circle') {
                    let area = shape.length * shape.length;
                    sum += area;
                }
                else if (shape.type == 'Square') {
                    let area = shape.radius * 2 * 3.14;
                    sum += area;
                }
            }

            return sum;
        }
    }

    let shapes = [
        new Circle(5),
        new Square(4),
        new Square(2)
    ]

    let calculator = new AreaCalculator();
    calculator.Calculate(shapes);
}
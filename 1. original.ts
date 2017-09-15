module Original {
    function AreaCalculator() {
        var shapes: any = [
            {
                radius: 5
            },
            {
                length: 2,
                width: 4
            },
            {
                length: 3,
                width: 3
            },
        ]

        let sum = 0;
        for (let shape of shapes) {
            if (shape.length) {
                let area = shape.width * shape.length;
                sum += area;
            }
            else if (shape.radius) {
                let area = shape.radius * 2 * 3.14;
                sum += area;
            }
        }

        return sum;
    }

    AreaCalculator();
}
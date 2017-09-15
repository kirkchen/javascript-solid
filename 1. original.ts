module Original {
    function AreaCalculator() {
        var shapes: any = [
            {
                radius: 5
            },
            {
                length: 2
            },
            {
                radius: 4
            },
        ]

        let sum = 0;
        for (let shape of shapes) {
            if (shape.length) {
                let area = shape.length * shape.length;
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
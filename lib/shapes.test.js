const (Square, Triangle, Circle)

const triangle = new Triangle();
triangle.setColor("blue");
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const circle = new Circle();
circle.setColor("green");
expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
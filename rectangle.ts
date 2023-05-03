export class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	move(direction: string, distance: number) {
		switch(direction) {
			case "right": {
				this.x + distance;
				break;
			}
			case "down": {
				this.y - distance;
				break;
			}
			case "left": {
				this.x - distance;
				break;
			}
			case "up": {
				this.y + distance;
				break;
			}
		}
	}
}

class Rectangle {
	point1: Point;
	point2: Point;
	point3: Point;
	point4: Point;

	constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
		this.point1 = p1;
		this.point2 = p2;
		this.point3 = p3;
		this.point4 = p4;
	}

	getArea() {
		return (this.point1.y - this.point3.y) * (this.point2.x - this.point1.x);
	}

	move(direction: string, distance: number) {
		this.point1.move(direction, distance);
		this.point2.move(direction, distance);
		this.point3.move(direction, distance);
		this.point4.move(direction, distance);
	}
}

let rectangle1 = new Rectangle(new Point(5, 5), new Point(10, 5), new Point(5, 2), new Point(10, 2))
console.log(rectangle1.getArea());
rectangle1.move("left", 1);
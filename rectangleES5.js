"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (direction, distance) {
        switch (direction) {
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
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(p1, p2, p3, p4) {
        this.point1 = p1;
        this.point2 = p2;
        this.point3 = p3;
        this.point4 = p4;
    }
    Rectangle.prototype.getArea = function () {
        return (this.point1.y - this.point3.y) * (this.point2.x - this.point1.x);
    };
    Rectangle.prototype.move = function (direction, distance) {
        this.point1.move(direction, distance);
        this.point2.move(direction, distance);
        this.point3.move(direction, distance);
        this.point4.move(direction, distance);
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(new Point(5, 5), new Point(10, 5), new Point(5, 2), new Point(10, 2));
console.log(rectangle1.getArea());
rectangle1.move("left", 1);
console.log(rectangle1.getArea());

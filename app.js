var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var classesNameSpace;
(function (classesNameSpace) {
    ;
})(classesNameSpace || (classesNameSpace = {}));
///<reference path="IClass.ts"  />
var classesNameSpace;
(function (classesNameSpace) {
    var ClassOne = (function () {
        function ClassOne() {
        }
        ClassOne.prototype.getClass = function () {
            console.log(this.className + this.classID);
            return this.className + this.classID;
        };
        ;
        return ClassOne;
    }());
    classesNameSpace.ClassOne = ClassOne;
    ;
})(classesNameSpace || (classesNameSpace = {}));
///<reference path="IClass.ts"  />
var classesNameSpace;
(function (classesNameSpace) {
    var ClassTwo = (function () {
        function ClassTwo() {
        }
        ClassTwo.prototype.getClass = function () {
            console.log(this.className + this.classID);
            return this.className + this.classID;
        };
        ;
        return ClassTwo;
    }());
    classesNameSpace.ClassTwo = ClassTwo;
    ;
})(classesNameSpace || (classesNameSpace = {}));
///<reference path="IClass.ts"  />
///<reference path="ClassOne.ts"  />
///<reference path="ClassTwo.ts"  />
var studentName = "Sujith Kumar";
var marks1 = 50;
var marks2 = 45;
var sum = marks1 + marks2;
console.log("Student name :" + studentName);
console.log("Marks :" + marks1 + marks2);
console.log("Sum :" + sum);
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World, How are you');
        return 90;
    };
    Startup.prototype.logMessage = function (message) {
        console.log('Message is Logging ' + message);
    };
    return Startup;
}());
if (sum > 70) {
    console.log("First Class");
}
else if (sum == 70) {
    console.log("Second Class");
}
else {
    console.log("Failed");
}
// Looping
var num = 5;
var factorial = 1;
for (factorial; factorial < num; factorial++) {
    console.log(factorial * num);
}
console.log(Startup.main());
var obj = new Startup();
obj.logMessage('Testing');
// Optional parameters Methods
function optionalParams(id, name, mailId) {
    console.log("Entered details : ID " + id + " and Name : " + name + " Email Id :" + mailId);
}
;
optionalParams(10, "sujith Kumar");
optionalParams(20, "TEsting Name", "sujithkumar640@gmail.com");
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
// playing with Lamda
var lamda = function (x) { return 10 + x; };
console.log(lamda(100));
var str = new String("This is string");
console.log("str.constructor is:" + str.constructor);
// Playing with Arrays 
var numberArray = [10, 20, 30, 40];
var index = 0;
for (index = 0; index < numberArray.length; index++) {
    console.log(numberArray[index]);
}
// FOr In loop
var index2;
for (index2 in numberArray) {
    console.log(numberArray[index2]);
}
//  Union datatypes can be string or number
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
;
var customer = {
    fname: "Sujith",
    lname: "kumar",
    age: 25,
    sayFullName: function () { return "Hi"; }
};
// Play with Class
var Car = (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return Car;
}());
//create an object 
var objxx = new Car("XXSY1");
//access the field 
console.log("Reading attribute value Engine as :  " + objxx.engine);
//access the function
objxx.disp();
var Shape = (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
var objxy = new Circle(223);
objxy.disp();
var _classOne = new ClassOne();
_classOne.getClass();

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
//# sourceMappingURL=FirstTypeScriptPage.js.map
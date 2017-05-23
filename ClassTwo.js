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
//# sourceMappingURL=ClassTwo.js.map
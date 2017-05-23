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
//# sourceMappingURL=ClassOne.js.map
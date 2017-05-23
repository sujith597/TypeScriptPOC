///<reference path="IClass.ts"  />
namespace classesNameSpace{
export class ClassOne implements IClass {
    className:"Class One";
    classID : " Class ID";
    public getClass() {
        console.log(this.className + this.classID);
        return this.className+ this.classID;
    };
};
}
///<reference path="IClass.ts"  />
namespace classesNameSpace{
export class ClassTwo implements IClass {
   className :"Class Two";
    classID : " Class Two ID";
    public getClass(){
        console.log(this.className + this.classID);
        return this.className+ this.classID;
    };
};
}
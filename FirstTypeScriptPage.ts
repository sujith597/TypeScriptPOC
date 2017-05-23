///<reference path="IClass.ts"  />
///<reference path="ClassOne.ts"  />
///<reference path="ClassTwo.ts"  />

var studentName:string = "Sujith Kumar";
var marks1:number =50;
var marks2:number = 45;
var sum = marks1+marks2;
console.log("Student name :" + studentName);
console.log("Marks :"+ marks1 + marks2);
console.log("Sum :"+ sum);
class Startup {
    public static main(): number {
        console.log('Hello World, How are you');
        return 90;
    }
    public logMessage(message):void{
        console.log('Message is Logging '+message);
    }
}

if(sum>70){
console.log("First Class");
}
else if (sum ==70){
console.log("Second Class");
}
else{
console.log("Failed");
}
// Looping
var num:number =5;
var factorial:number =1;
for(factorial; factorial<num;factorial++){
console.log(factorial*num);
}

console.log(Startup.main());
var obj = new Startup();
obj.logMessage('Testing');

// Optional parameters Methods
function optionalParams(id:number, name:string, mailId?:string){
console.log("Entered details : ID "+id+" and Name : "+name+" Email Id :"+ mailId);
};

optionalParams(10,"sujith Kumar");
optionalParams(20,"TEsting Name","sujithkumar640@gmail.com");

function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)
// playing with Lamda
var lamda = (x:number)=>10+x;
console.log(lamda(100));

var str = new String( "This is string" ); 
console.log("str.constructor is:" + str.constructor);

// Playing with Arrays 
var numberArray:number[] = [10,20,30,40];
var index=0;
for(index=0;index< numberArray.length;index++){
    console.log(numberArray[index]);
}
// FOr In loop
var index2:any;
for(index2 in numberArray){
    console.log(numberArray[index2]);
}
//  Union datatypes can be string or number
var val:string|number 
val = 12;
console.log("numeric value of val "+val);
val = "This is a string";
console.log("string value of val "+val);


// Lets do some Interface work
interface Iperson {
fname : string,
lname: string,
age:number,
sayFullName : ()=> string
};

var customer:Iperson ={
fname:"Sujith",
lname :"kumar",
age :25,
sayFullName : ():string => {return "Hi"}
};

// Play with Class

class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var objxx = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+objxx.engine)  

//access the function
objxx.disp()


class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var objxy = new Circle(223); 
objxy.disp();

var _classOne = new ClassOne();
_classOne.getClass();
// class Employee
// {
//     empCode:number;
//     empName:string;
//     constructor(code,name)
//     {
//         this.empCode=code;
//         this.empName=name;
//     }
//     displayName()
//     {
//         console.log(`Employee Full name is ${this.empName}`)
//     }
// }

// var emp= new Employee(123,"Ahmed");

// emp.displayName();
//-----------------------inheritance----------------------
// class Person
// {
//     personName:string;
//     constructor(name)
//     {
//         this.personName=name;
//     }
// }

// class Employee extends Person
// {
//     empCode;
//     constructor(name,code)
//     {
//         super(name);
//         this.empCode=code;
//     }
// }

//------------------class implemnt interface-----------

// interface IEmployee
// {
//     name:string;
//     code:number;
// }

// interface IPerson
// {
//     age:number;
// }

// class Employee implements IEmployee,IPerson{
//     name: string;
//     code:number;
//     age:number;
//     salary:number;

//     constructor(name,code,age,salary)
//     {
//         this.name=name;
//         this.code=code;
//         this.age=age;
//         this.salary=salary;
//     }
// }


//----------------------override------------------

// class Car
// {
//     carName:string;
//     carPrice:number;
//     constructor(name,price)
//     {
//         this.carName=name;
//         this.carPrice=price;
//     }

//     displayInformation()
//     {
//         console.log("Im a car")
//     }
// }

// class TIPO extends Car
// {
//     displayInformation()
//     {
//         super.displayInormation()f;
//         console.log("Im a tipo")
//     }
// }

// var tipo=new TIPO("tipo",600000);
// tipo.displayInformation();

//---------------abstract class-----------------------

// abstract class Person
// {
//     name:string;
//     constructor(name:string)
//     {
//         this.name=name;
//     }

//     display()
//     {
//         console.log(this.name)
//     }
//     abstract find(string):Person;
// }


// class Employee extends Person
// {
//   readonly  empCode:number;
//     constructor(name,code)
//     {
//         super(name);
//         this.empCode=code;
//     }

//     find(name:string):Person
//     {
//         return new Employee("Ahmed",123);
//     }
// }

// var emp:Person = new Employee("Ahmed",123);
//emp.empCode=10;

// class Circle
// {
//     static PI=3.14;
//     static getWidth(){
//         console.log("Width")
//     }
// }

// Circle.PI;
// Circle.getWidth();

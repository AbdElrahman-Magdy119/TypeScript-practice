// interface IPerson{
//     firstName?:string;
//     lastName?:string;
// };
// interface IEmployee extends IPerson
// {
//    readonly id:number,
//     name:string;
//     salary?:number;
//     getName?(name:string);
// }
// var emp1:IEmployee={
//     id:10,
//     name:"Ahmed",
//     salary:3000,
//     getName() {
//         console.log("Ahmed");
//     },
// }
// function getArray<T>(items:T[]):T[]
// {
//     return new Array().concat(items);
// }
// var numericArray=getArray([10,20,30,40]);
// var stringArray=getArray(["Ahmed","Mohamed","Salma"]);
// //numericArray.push("Ahmed");
// //stringArray.push(20);
// numericArray.push(20);
// stringArray.push("abdo")
// enum orderStatus{
//     placed,
//     inRoute=2,
//     Cancelled,
//     delivered
// }
// var orderStatusNumber=orderStatus.placed;
// console.log(orderStatusNumber);
// console.log(orderStatus.inRoute);
// console.log(orderStatus.Cancelled);

// function getArray(items:any[]):any[]
// {
//     return new Array().concat(items);
// }

// var numericArray=getArray([10,20,30,40]);

// var stringArray=getArray(["Ahmed","Mohamed","Salma"]);

// numericArray.push("Ahmed");
// stringArray.push(20);

// function getArray<T>(items:T[]):T[]
// {
//     return new Array().concat(items);
// }

// var numericArray=getArray([10,20,30,40]);

// var stringArray=getArray(["Ahmed","Mohamed","Salma"]);

// numericArray.push("Ahmed");
// stringArray.push(20);

interface KeyPair<T,U>
{
    name:T;
    code:U
}

let keyPair1:KeyPair<string,number>={name:"Ahmed",code:1234};
let keyPair2:KeyPair<string,string>={name:"Ahmed",code:"1234"};

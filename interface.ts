// let objOne={firstName:"Ahmed",lastName:"Mohamed"};
// let objTwo={fName:"Ahmed",lName:"Mohamed"};

interface IPerson{
    firstName?:string;
    lastName?:string;
};

let objOne:IPerson={firstName:"Ahmed",lastName:"Mohamed"};
let objTwo:IPerson={firstName:"Ahmed",lastName:"Mohamed"};

interface IEmployee extends IPerson
{
   readonly id:number,
    name:string;
    salary?:number;
    getName?(name:string);
}

var emp1:IEmployee={
    id:10,
    name:"Ahmed",
    salary:3000,
    getName() {
        console.log("Ahmed");
    },
}

//emp1.id=20;


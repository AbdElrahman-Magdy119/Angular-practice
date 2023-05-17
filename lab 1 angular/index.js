"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//************************ task 1 *********************
//   let namesTwo:string[] = []
//    users.map((user,index) => {
//     namesTwo [index]= user.username
//  })
//    console.log(namesTwo.sort());
//************************ task 2 *********************
// const x = users.filter(elm=>( parseInt(elm.address.geo.lat) > -37.1496 && parseInt(elm.address.geo.lat) < 81.1496 ) &&
//  ( parseInt(elm.address.geo.lng) > -68.6102 && parseInt(elm.address.geo.lng) < 62.5342 ))
//   console.log(x);
//************************ task 3 *********************
//  function getuser(users:any[]):any
//  {  
//        users.map((elm,index) => {
//        })
//        const data = []       
//      for(let i=0;i<users.length;i++)
//         {
//             data[i]=`https://maps.google.com/?q=${users[i].address.geo.lat},${users[i].address.geo.lng}`
//         }
//         return data
//  }
//  console.log(getuser(users))
// ************************ task 4 *********************
class Person {
    constructor(name, address, phonenumber, email) {
        this.name = name;
        this.address = address;
        this.phonenumber = phonenumber;
        this.email = email;
    }
    displayName() {
        console.log(` class name person  name is ${this.name}`);
    }
}
class student extends Person {
    constructor(student_status, name, address, phonenumber, email) {
        super(name, address, phonenumber, email);
        this.student_status = student_status;
    }
    displayName() {
        console.log(` class name student  name is ${this.name}`);
    }
}
class Employee extends Person {
    constructor(office, salary, date_hired, name, address, phonenumber, email) {
        super(name, address, phonenumber, email);
        this.office = office;
        this.salary = salary;
        this.date_hired = date_hired;
    }
    displayName() {
        console.log(` class name Employee  name is ${this.name}`);
    }
}
class faculty extends Employee {
    constructor(office_hours, rank, office, salary, date_hired, name, address, phonenumber, email) {
        super(office, salary, date_hired, name, address, phonenumber, email);
        this.office_hours = office_hours;
        this.rank = rank;
    }
    displayName() {
        console.log(` class name faculty  name is ${this.name}`);
    }
}
class staff extends Employee {
    constructor(tittle, office, salary, date_hired, name, address, phonenumber, email) {
        super(office, salary, date_hired, name, address, phonenumber, email);
        this.tittle = tittle;
    }
    displayName() {
        console.log(` class name staff  name is ${this.name}`);
    }
}
var person = new Person("abdo", "assuit", 1491516647, "asd@gmail.com");
person.displayName();
let date = new Date("2019-01-16");
var emplayee = new Employee("asd", 1455, date, "abdo", "assuit", 1491516647, "asd@gmail.com");
emplayee.displayName();

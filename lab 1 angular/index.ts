import  users from "./users.json";

//************************ task 1 *********************
//   let namesTwo:string[] = []
//    users.map((user,index) => {
//     namesTwo [index]= user.username
//  })
//    console.log(namesTwo.sort());

   // const ans=users.sort((a, b) => {  
//   return a.name >= b.name ? 1 : -1
// })
// console.log(ans);

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


// class Person
// {
//     name:string
//     address:string
//     phonenumber:number
//     email:string
//     constructor(name:string,address:string,phonenumber:number,email:string)
//     {
//         this.name=name;
//         this.address=address;
//         this.phonenumber=phonenumber;
//         this.email=email;
//     }
//     displayName()
//         {
//             console.log(` class name person  name is ${this.name}`)
//         }
// }

// const enum status{
//     freshman,
//     sophomore,
//     junior,
//     senior
//  }

// class student extends Person
// {
//      student_status:status
//     constructor(student_status:status,name:string,address:string,phonenumber:number,email:string)
//     {
//         super(name,address,phonenumber,email);
//         this.student_status=student_status;
//     }
//     displayName()
//         {
//             console.log(` class name student  name is ${this.name}`)
//         }
// }
// class Employee extends Person
// {
//      office:string
//      salary:number
//      date_hired:Date

//     constructor(office:string,salary:number,date_hired:Date,name:string,address:string,phonenumber:number,email:string)
//     {
//         super(name,address,phonenumber,email);
//         this.office=office;
//         this.salary=salary;
//         this.date_hired=date_hired;
//     }
//     displayName()
//         {
//             console.log(` class name Employee  name is ${this.name}`)
//         }
// }
// class faculty extends Employee
// {
//     office_hours:string
//     rank:string

//     constructor(office_hours:string,rank:string,office:string,salary:number,date_hired:Date,name:string,address:string,phonenumber:number,email:string)
//     {
//         super(office,salary,date_hired,name,address,phonenumber,email);

//         this.office_hours=office_hours;
//         this.rank=rank;
//     }
//     displayName()
//         {
//             console.log(` class name faculty  name is ${this.name}`)
//         }
// }
// class staff extends Employee
// {
//     tittle:string
//     constructor(tittle:string,office:string,salary:number,date_hired:Date,name:string,address:string,phonenumber:number,email:string)
//     {
//         super(office,salary,date_hired,name,address,phonenumber,email);
//         this.tittle=tittle;
//     }
//     displayName()
//         {
//             console.log(` class name staff  name is ${this.name}`)
//         }
// }

// var person=new Person("abdo","assuit",1491516647,"asd@gmail.com")
//  person.displayName();
//  let date: Date = new Date("2019-01-16");
//  var emplayee = new Employee("asd",1455,date,"abdo","assuit",1491516647,"asd@gmail.com")
//  emplayee.displayName();

// //Spread Operators  (For Copying)
// let a=[1,2,3,4,5]
// let b=[...a];
// b[2]=10
// a[1]=3 
// console.log(a);
// console.log(b);


// //Normal copying

// let a1=[1,2,3,4,5]
// let b1=a1;
// b1[2]=10
// console.log(a1)
// console.log(b1)
// let a5=10
// const func=()=>{
//     a5=20;
//     console.log(a5);
// }

// func();
// console.log(a5);

// let a3=[1,2,3,4,5]
// let x=[6,7,8,9]
// let b3=[...a3,...x]
// console.log(b3)



// //values

// function spreadExample(values){
//     console.log("spreadoperator : "+values)
// }
// spreadExample(...b3)


// //Rest Operator

// let rest =(...values)=>{
//     console.log("Rest Operator : "+values)
// } 
// rest(1,2,3,4,5)

// Using Objects in rest operator
// let stu ={
//     name : "Sneha",
//     age : "22",
//     address : "Ottachathiram",
//     MartialStatus : "Single"
// }
// let stu1 ={
//     name : "Abi",
//     age : "22",
//     address : "Chennai",
//     MartialStatus : "Single"
// }
// let obj = (...s) =>{
//     console.log(s[0].name);
// }
 
// obj(stu,stu1)



//Destrucuring Operator
// let a = [1,3,5,7,9]
// let [b,c,x,...y]=a;
// console.log(y)



//Destructing Operator in Object
// let stu ={
//     name : "Singam",
//     age : 22,
//     address : "Ottachathiram",
//     MartialStatus : "Single"
// }

// let {name,...other_Details}=stu
// console.log(name);
// //console.log(age);
// console.log(other_Details);














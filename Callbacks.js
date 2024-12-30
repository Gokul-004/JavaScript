
//CAllBacks - Function passed as a parameters is knon callbacks

// function dog(cat)
// {
//     setTimeout( ()=>{

//         console.log("Jack")
//         cat();
//     },2000);
// }
// function cat()
// {
//     console.log("Rose")
// }
// dog(cat)



// const attendance = (lunch) => {
//     setTimeout(()=>{
//         console.log("Attendance");
//         lunch(Returntohome);
//     },2000);
// }
// const lunch = (Returntohome) =>{
//     setTimeout(()=>{
//         console.log("Eating Lunch");
//         Returntohome();
        
//     },2000)
// }

// const Returntohome = () =>{
//     setTimeout(()=>{
//         console.log("GOING TO  HOME \nDayCompleted");
//     },2000)
// }


// // attendance(()=>lunch(()=>Returntohome(()=>{
// //     console.log("Day Completed")
// // })))

// or

// // attendance(lunch)


// //Promises  Chaining
// const attendance = () => {
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             let AttendancePA=true;
//             if(AttendancePA)
//                 resolve("Attendance Present");
//             else
//                 reject("Not Present");
//         },2000);
//     })
// }
// const lunch = () =>{
//     return new Promise((success,failure)=>{

//         setTimeout(()=>{
//             let LunchE=true;
//             if(LunchE)
//                 success("Eating Lunch"); 
//             else
//                 failure("Not Had A Lunch");         
//         },2000)
//     })
// }

// const Returntohome = () =>{
//     return new Promise((success,failure)=>{

//         setTimeout(()=>{
//             let bus=true
//             if(bus)
//                 success("Going to Home")
//             else
//                 failure("Missed the Bus");
//         },2000)
//     })
// }
// attendance().then((value)=>{ console.log(value);  return lunch()}).then((value)=>{ console.log(value); return  Returntohome() })
//             .then((value)=>{ console.log(value);console.log("Day cOmpleted") }).catch(error =>{ console.error(error)})



// Asyn and await


// const attendance = () => {
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             let AttendancePA=true;
//             if(AttendancePA)
//                 resolve("Attendance Present");
//             else
//                 reject("Not Present");
//         },2000);
//     })
// }
// const lunch = () =>{
//     return new Promise((success,failure)=>{

//         setTimeout(()=>{
//             let LunchE=true;
//             if(LunchE)
//                 success("Eating Lunch"); 
//             else
//                 failure("Not Had A Lunch");         
//         },2000)
//     })
// }

// const Returntohome = () =>{
//     return new Promise((success,failure)=>{

//         setTimeout(()=>{
//             let bus=true
//             if(bus)
//                 success("Going to Home")
//             else
//                 failure("Missed the Bus");
//         },2000)
//     })
// }
// async function finalDay() {
//     try{
//         let a =await attendance();
//         console.log(a);
//         let l=await lunch()
//         console.log(l);
//         let R=await Returntohome();
//         console.log(R);
//     }
//     catch(error){
//         console.error(error)
//     }
    
// }
// finalDay();


// //Working 

// const fileprocess = (filedownload,a) =>{
//     setTimeout(()=>{
//         console.log("File "+a+" is Being Processed")
//         filedownload(a);
//     },2000)
// }

// const filedownload =(a) =>{
//     setTimeout(()=>{
//         console.log("File " + a +" is Downloaded \nDownload Complete")
//     },2000);
// }

// let a="abc"
// //fileprocess(filedownload,a)
// fileprocess(()=>filedownload(a),a,()=>console.log("Download Completed"));



//Promise All

let a1 =()=>{
    return new Promise((success,failure)=>{
        let data=true;
        if(data)
        success("Data a1 Returned")
        else
        failure("Data a1 Not returned")
        
    })
}

let a2 =()=>{
    return new Promise((success,failure)=>{
        let data=true;
        if(data)
        success("Data a2 Returned")
        else
        failure("Data  a2 Not returned")
        
    })
}

let a3 =()=>{
    return new Promise((success,failure)=>{
        setTimeout(()=>
        {
            let data=true;
            if(data)
            success("Data a3 Returned")
            else
            failure("Data a3 Not returned")
        },2000)
       
        
    })
}


 let  dog =async () =>{
    let[a,b,c]=await Promise.all([a1(),a2(),a3()])
    console.log(a);
    console.log(b);
    console.log(c);

}

dog()
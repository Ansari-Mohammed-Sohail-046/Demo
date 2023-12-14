// function add(a1,a2){
//     return new Promise((res,rej)=>{
//         if(typeof(a1)!='number'){
//             return rej('please provide p1 as a number')
//         }
//         if(typeof(a2)!='number'){
//             return rej('please provide p2 as a number')
//         }
//         let result=a1+a2
//         return res(result);
//     });
// }

// function subtraction(b1,b2){
//     return new Promise((res,rej)=>{
//         if(typeof(b1)!='number'){
//             return rej('please provide b1 as a number')
//         }
//         if(typeof(b2)!='number'){
//             return rej('please provide b2 as a number')
//         }
//         let result=b1-b2
//         return res(result);
//     });
// }

// function multiply(c1,c2){
//     return new Promise((res,rej)=>{
//         if(typeof(c1)!='number'){
//             return rej('please provide c1 as a number')
//         }
//         if(typeof(c2)!='number'){
//             return rej('pleas provide c2 as a number')
//         }
//         let result=c1*c2
//         return res(result)
//     });
// }

// function divid(s1,s2){
//     return new Promise((res,rej)=>{
//         if(typeof(s1)!='number'){
//             return rej('please provide s1 as a number')
//         }
//         if(typeof(s2)!='number'){
//             return rej('please s2 provide as a number')
//         }
//         let result=s1/s2
//         return res(result)
//     });
// }

// async function calculate(){
//     let addition=await add(10,20).catch((error)=>{console.log('error',error)})
//     console.log(addition)
//     let multy=await multiply(addition,2).catch((error1)=>{console.log('error1',error1)})
//     console.log(multy)
//     let dvd=await divid(multiply1,6).catch((error2)=>{console.log('error2',error2)})
//     console.log(dvd)
//     let sub=await subtraction(dvd,10).catch((error3)=>{console.log('error3',error3)})
//     console.log(sub)
// }
// calculate();




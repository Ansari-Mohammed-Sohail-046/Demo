// function findDomin(email){
//     if(typeof(email)!='string'){
//         return{error:'provide string'}
//     }
//     let domin=""
//     let index=email.length
//     for(let i in email){
//         if(email[i]=='.'){
//             index=i
//         }
//         if(i>index){
//             domin+=email[i];
//         }
//     }
//     if(domin==""){
//         return false
//     }
//     return{email:domin}
// }

// let result=(findDomin('sohail@gmail.com'));
// console.log(result);

// function modifystr(p1,replace){
//     let modify=""
//     for(let i=0;i<p1.length;i++){
//         if(p1[i]=='.'){
//             modify+=replace
//             continue;
//         }
//         modify+=p1[i]
//     }
//     return modify


// }
// let result=modifystr('hello.world.!',"--");
// console.log(result)

// function swapPlace(p1,position){
//     if(typeof(p1)!='object'){
//         return{error:'provide array'}
//     }
//     if(typeof(position)!='number'||position>p1.length){
//         return{error:'postion should be less then element'}
//     }
//         let swap=[]
//         for(let i =0;i<p1.length;i++){
//             if(i+position>=p1.length){
//                 let index=i+position-p1.length
//                 swap[index]=p1[i]
//                 continue;
//     }
//     swap[i+position]=p1[i]
//         }
//         return swap
// }
// let result=swapPlace([1,2,3],1)
// //console.log(swapPlace([1,2,3],1))
// console.log(result)


// if(typeof(s)!='string'){
//     return{error:'provid string'}
// }
// let s
// for(let i in s){
//     if(s[i]=='.'){
//         str=i
//     }
//     if(i>str){
//         symbol+=s[i]
//     }
//     return{s:symbol}
// }


// function check(n){
//     if (n % 2 == 0){
//         return 'number is even'
//     }else 
//     return 'number is odd'
// };
// console.log (check(7));

// let evforArray=[1,2,3,4,5,6,7,8,9]
// let even = [];
// for(let i = 0; i < evforArray.length; i++) {
//        if (evforArray[i] % 2 == 0)
//        even.push(evforArray[i]);
// }
// console.log(`Even numbers in an array are: ${even}`);

// let evforArray=[1,2,3,4,5,6,7,8,9]
// let even =[]
// for(let i of evforArray){
//     if(evforArray[i] % 2 == 0){
//         console.log [('even number')]
//     }
//     console.log[('odd number')]
//     even.push([i]);


// }

// console.log(evforArray);



// function check(n1){
//     if(n1 & 1 == 1){
//         return 'number is odd'
//     }
//     return 'number is even'
// };

// console.log (check(2));

// function dosquare(n2){
//     return n2*n2
// }
// console.log(dosquare(5));

// function sqroot(n3){
//     return n3**0.5
// }
// console.log(sqroot(81));

let evforArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let even = []
for (let i of evforArray) {
    if (i % 2 == 0) {
        console.log('even number')
    } else
        console.log('odd number')
    even.push([i]);


}

console.log(even);

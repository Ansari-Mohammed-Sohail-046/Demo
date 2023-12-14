//
//~~~~~~~~~~~~~~~Hashtag Horizontal~~~~~~~~~~~~~~~~~~~~~`
// for(let i=1;i<=5;i++){
//     let pattern=""
//     for(let j=1;j<=i;j++){
//         if(j==2||j==4){
//             pattern+="#"
//         }
//         else{
//             pattern+=j
//         }
      
//     }
//     console.log(pattern)
// }
// //**************Hashtag Vertical***************************/

// for(let i=1;i<=5;i++){
//     let pattern=""
//     for(let j=1;j<=i;j++){
//         if(i%2==0){
//             pattern+="#"
//         }
//         else{
        
//             pattern+=j
//         }
//     }
//     console.log(pattern)
// }


// //<<<<<<<<<<<<<<<<<<<<<<<<<Reverse string using without methods>>>>>>>>>>>>>>>>>>>>>>


// let ar ="amaan"
// let a =""
// for (let i=ar.length-1;i>=0;i--){
//     a = a + ar[i]
// }
// console.log(a);


// class employee{
//     employe=[]
//     constructor(employelist){
//         this.employe=employelist
//     }
//     gethighest(){
//         let high=0
//         for(let i of this.employe){
//             if(i.salary>high){
//                 high=i.salary
//             }
//         }
//         return high
//     }
// }
// let employdata=[{name:'dell',salary:12000},
//                 {name:'acer',salary:8000}]
// let employe=new employee(employdata)
// console.log(employe.gethighest());


class employee{
    employe=[]
    constructor(employelist){
        this.employe=employelist
    }
    getlowest(){
        let low=20000
        for(let i of this.employe){
            if(i.salary<low){
                low=i.salary
            }
        }
        return low
    }
gettotalemp(){
    return(employdata.length)
}
}
let employdata=[{name:'dell',salary:12000},
                {name:'acer',salary:8000}]
let employe=new employee(employdata)
console.log(employe.getlowest());
console.log(employe.gettotalemp())


// class Bankacount{
// accountnumer=12345678
// amount=20000

// }
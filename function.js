// let array=[1,9,8,6,7,5,0,9];
// function highest(list){
//     if(!Array.isArray(list)){
//         return{error:"provide array"}
//     }
//     let high=0
//     for(let i=0;i<list.length;i++){
//         if(list[i]>high){
//             high=list[i]
//         }
//     }
//     return{highest:high}
// }
// // console.log(highest(array))

// let ary=[-1,-9,-6,-10,-3,-7];
// function lowest(list){
//     if(!Array.isArray(list)){
//         return{error:"provide array"}
//     }
//     let low= list[list.length-1]
//     for(let i=0;i<list.length;i++){
//         if(list[i]<low){
//             low=list[i]
//         }
//     }
//     return{lowest:low}
// }
// console.log(lowest(ary));


// let num=[3,5,7,8,90,10,89,99];
// function add(list){
//     if(!Array.isArray(list)){
//         return{Error:"provid Array"}
//     }
//     let total=0
//     for(let i=0;i<list.length;i++){
//         total+=list[i]
//     }
//     return{total}
// }
// console.log(add(num));

// let numbers=[2,5,8,9,8,9,8,5,4,7,4,8,3,8,0,4];
// function target(number,target){
//     let count=0;
//     for(let i of number){
//         if(i==target){
//             count=count+1
//         }
//     }
//         if(count>0){
//             return(count);
//         }
//     return('not Existing Table');
// }
// let result=target(numbers,8);
// console.log(result);

// function check (num){
//     if(num>0){
//         return('positve')
//     }
//     if(num<0){
//         return("negative")
//     }
//     else
//     return('zero')
// }
// let result=check(-1);
// console.log(result);

// function swap(a,b){
//     let t= a
//     a=b
//     b=t
// return[a,b]
     
// }
// let result=(swap(0,1));
// console.log(result);

class Building{
    building_detail=[]
    #sales=''
    #cost_of_production=[]
    building_name="lodha"
    location="Kurla"
    floor=12
    lift=1
    attend_lobbies=2
    
    constructor(room_number,building_name,location,floor,lift,attend_lobbies){
        this.building_name=building_name
        this.location=location
        this.room_number=room_number
        this.floor=floor
        this.lift=lift
        this.attend_lobbies=attend_lobbies
        this.#sales=sales
        this.#cost_of_production=cost_of_production
    }

    }

    let eiffel = new Building(this.cost_of_production[22222])
    console.log(eiffel);

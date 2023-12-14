class Car{
    color='white'
    engine=1200 
    seat=4
    constructor(color,engine,seat){
        this.engine=engine
        this.color=color
        this.seat=seat
    }
    getColor(){
        return (this.color,this.engine)
    }
}
//Car.getColor();
let ertica=new Car('red',1200,'7')
let swift=new Car('white',1000,5);
ertica.color='black'
ertica.getColor();
console.log(ertica);
console.log(swift);

let Employees=[];
function deletEmployees(id){
    return new Promise((resolve, reject) => {
        if(typeof(id)!='number'){
            return reject('please provide id as a number')
        }
        deletEmployees[id-1];
        return resolve('delet succesfull');
    })
}
async function abc(){
    let d=await deletEmployees(1)
    .catch((error)=>{console.log(error)});
    console.log('data',id);
}
// class Car{
//     color='white'
//     engine= 1600
//     company= "BMW"
//     model= 2023
//     forwerd(){
//         console.log('forwerd')
//     }
//     backword(){
//         console.log('backword')
//     }

// }
// let ertica  = new Car();
// ertica.color='blue'
// let creeta= new Car();
// creeta.color= "white"
// console.log(ertica);
// console.log(creeta);

// class Employe{
//     employe=[]
//     creat(data){
//         if(typeof(data)!='object'){
//             return{error:'provide object'}
//         }
//         if(typeof(data.name)!='string'){
//             return{error:'provide string in name'}
//         }
//         if(typeof(data.email)!='string'){
//             return{error:'provide string in Email'}
//         }
//         if(typeof(data.salary)!="number"){
//             return{error:'provide number of salary'}
//         }
//         data.id=this.employe.length+1
//         this.employe.push(data)
//         return{data:data}
//     }
//     findone(id){
//         if(typeof(id)!='number'){
//             return{error:'id must be number'}
//         }
//         if(id<0||id>employe.length||typeof(employe[id-1])!='object'){
//             return{error:"not found"}
//         }
//           return{data:data}

//     }
// }
// let emp=new Employe();
// let emp1=emp.creat({name:'Sohail',email:"Sohail@gmail.com",salary:15000});
// console.log(emp1);


class Employe {
    employe = []
    creat(data) {
        if (typeof (data) != 'object') {
            return { error: 'provide object' }
        }
        if (typeof (data.name) != 'string') {
            return { error: 'provide string in name' }
        }
        if (typeof (data.email) != 'string') {
            return { error: 'provide string in Email' }
        }
        if (typeof (data.salary) != "number") {
            return { error: 'provide number of salary' }
        }
        data.id = this.employe.length + 1
        this.employe.push(data)
        return { data: data }
    }
    findone(id) {
        if (typeof (id) != 'number') {
            return { error: 'id must be number' }
        }
        if (id < 0 || id > employe.length || typeof (employe[id - 1]) != 'object') {
            return { error: "not found" }
        }
        return { data: data }

    }
    update(data, id) {
        if (typeof (data) != 'object') {
            return { error: 'provide data in object' }
        }
        if (typeof (id) != 'number' || id < 1 || typeof (this.employe[id - 1]) != 'object') {
            return { error: 'user not found' }
        }
        let emp1 = this.employe[id - 1]
        if (typeof (data.name) == 'string') {
            emp1.name = data.name
        }
        if (typeof (data.email) == "string") {
            emp1.email = data.email
        }
        if (typeof (data.salary) == "number") {
            emp1.salary = data.salary
        }
        this.employe[id - 1] = emp1
        return { data: emp1 }
    }
    destruction(id) {
        if (typeof (id) != 'number' || id < 1 || typeof (this.employe[id - 1] != 'object')) {
            return { error: 'not found' }
        }
        delete this.employe[id - 1]
        return { data: 'employe is delet' }
    }
}
let emp = new Employe();
let emp1 = emp.creat({ name: 'Sohail', email: "Sohail@gmail.com", salary: 15000 });
let emp2 = emp.creat({name:'afzal',email:'afzal@gmail.com',salary:20000});
let emp3 = emp.creat({name:"Irfan",email:'irfan@gmail.com',salary:22000});
let emp4 = emp.creat({name:"riyaz",email:'riyaz@gmail.com',salary:25000});
let emp5 = emp.update({name:"danish"},4)
console.log(emp5);

class Employe(){
employe=[]
constroctur(employelist){
    this.employe=employelist
}
gettotal(){
    let tota
}
}
    

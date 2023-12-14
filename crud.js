class Employe{
    employe=[]
    creat (data){
        if(typeof(data)!="object"){
            return{error:'provide object'}
        }
        if(typeof(data.name)!='string'){
            return{error:'provide string in name'}
        }
        if(typeof(data.email)!='string'){
            return{error:'provide string in email'}
        }
        if(typeof(data.salary)!='number'){
            return{error:'provide number of salar'}
        }
        data.id=this.employe.length+1
        this.employe.push(data)
            return{data}    
    }
    findone(id){
        if(typeof(id)!="number"){
            return{error:"id must be number"}
        }
        if(id<1||id>this.employe.length||typeof(this.employe[id-1])!='object'){
            return{error:'data not found'}
        }
        return{data:this.employe[id-1]}
    }
    update(data,id){
        if(typeof(data)!='object'){
            return{error:'proved object'}
        }
        if(typeof(id)!='number'||id<1||typeof(this.employe[id-1])!="object"){
            console.log(this.employe[id-1])
            return{error:"user not found"}
        }
        let emp1=this.employe[id-1]
        if(typeof(data.name)=='string'){
            emp1.name=data.name
        }
        if(typeof(data.email)=='string'){
            emp1.email=data.email
        }
        if(typeof(data.salary)=='number'){
            emp1.salary=data.salary
        }
        this.employe[id-1]=emp1
        return{data:emp1}
    }
    destruction(id){
        if(id<1||id>this.employe.length||typeof(this.employe[id-1]!='object')){
            return{error:'id not find'}

        }
        delete this.employe[id-1]
        return{error:"employe delet"}
    }
}
let emp=new Employe()
let emp2=emp.creat({name:'irfan',email:'irfan@gmail.com',salary:100000});
let emp3=emp.creat({name:'afzal',email:'afzal@gmail.com',salary:80000});
let emp4=emp.creat({name:'sohail',email:'sohail@gmail.com',salary:60000});
let emp5=emp.creat({name:'riyaz',email:'riyaz@gamil.com',salary:400000});
let up3=emp.update({name:"danish"},3);
// console.log(up3);
// let del4=emp.destruction(4);
// console.log(del4)
let fd=emp.findone(3);
console.log(fd);
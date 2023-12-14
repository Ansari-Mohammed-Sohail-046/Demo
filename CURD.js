class Employe{
    employe=[]
    creat (data){
        if(typeof(data)!='object'){
            return{error:'provide data in object'}
        }
        if(typeof(data.name)!='string'){
            return{error:'provide name in string'}
        }
        if(typeof(data.email)!='string'){
            return{error:'provide email in name'}
        }
        if(typeof(data.salary)!='number'){
            return{error:'provide salary of number'}
        }
        data.id=this.employe.length+1
        this.employe.push(data)
        return{data:data}
    }
    findone(id){
        if(typeof(id)!='number'){
            return{error:'provide id in number'}
        }
        if(id<1||id>this.employe.length||typeof(this.employe[id-1])!='object'){
            return{erro:'id not found'}
        }
        return{erro:this.employe[id-1]}
    }
    // findall(){
    //     let emp=this.employe
    //     if(typeof(emp)!='object'){
    //         return{erro:'employe is not found'}
    //     }
    //     return (emp)
    // }
    update(data,id){
        if(typeof(data)!='object'){
            return{erro:'provide object'}
        }
         if(typeof(id)!='number',id<1||typeof(this.employe[id-1])!='object'){
            console.log(this.employe[id-1])
            return{erro:'user not found'}
         }
         let emp0=this.employe[id-1]
         if(typeof(data.name)=='string'){
            emp0.name=data.name
         }
         if(typeof(data.email)=='string'){
            emp0.email=data.email
         }
         if(typeof(data.name)=='number'){
            emp0.salary=data.salary
         }
         this.employe[id-1]=emp0
         return{data:emp0}
    }
     delet(id){
         if(id<1||id>this.employe.length||typeof(this.employe[id-1])!='object'){
            return{erro:'id not found'}
         }
         delete this.employe[id-1]
         return{data:'employe is delet'}
    }
}
let emp=new Employe()
let emp1=emp.creat({name:'afzal',email:'afzal@gmail.com',salary:80000});
let emp2=emp.creat({name:'riyaz',email:'riyaz@gamil.com',salary:400000});
let emp3=emp.creat({name:'sohail',email:'sohail@gmail.com',salary:60000});
let emp4=emp.creat({name:'irfan',email:'irfan@gmail.com',salary:100000});
let up3=emp.update({name:"danish"},3);
console.log(up3);
let del4=emp.delet(4);
console.log(del4)
let fd=emp.findone(3);
console.log(fd);

            


let employes=[]
function creat (data,CB){
    setTimeout(()=>{
        if(typeof(data)!='object'){
            return CB('please provide detail')
        }
        if(typeof(data.name)!='string'){
            return CB('please provide name as a string')
        }
        if(typeof(data.contact)!='number'){
            return CB('please provide conatct as a number')
        }
        let id=employes.length+1
        //data.id=id
        data['id']=id
        employes.push(data);
        return CB(null,data);
    },1000);
}
function  findone (id,CB){
    setTimeout(()=>{
        if(typeof(id)!='number'||id<1||id>employes.length){
            return CB('provide id as a number')
        }
        return CB(null,employes[id-1])
    },1000)
}

function findall(){
    setTimeout(()=>{
        let emp=employes
        if(typeof(emp)!='object'){
            return ('employes not found')
        }
        return (emp);
    });
};

function update(id,data,CB){
    setTimeout(()=>{
        if(typeof(id)!='number'){
            return CB('provide id in number')
        }
        let userdata=employes[id-1]
        if(typeof(userdata)!='object'){
            return CB('User not found')
        }
        if(typeof(userdata.name)=='string'){
            userdata.name=data.name
        }
        if(typeof(userdata.contact)=='number'){
            userdata.contact=data.contact
        }
        if(typeof(userdata.email)=='string'){
            userdata.email=data.email
        }
        employes[id-1]=userdata
        return CB(null,employes[id-1]);
    },3000)
}
function dlete(id,CB){
    setTimeout(()=>{
        if(typeof(id)!='number'){
            return CB('please provide id as a number')
        }
        if(typeof(id)!='number'||id<1||id>employes.length){
            return CB('provide id as a number')
        }
        delete employes[id-1]
        return CB(null,{data:'employee id is deleted'});
    },4000)
}

creat({name:'sohail',contact:8693033715},(error,emp)=>{
    if(error){
        return console.log ('error',error);
    }
        return console.log ('employes',emp);
});

creat({name:'hamza',contact:8655639919},(error6,emp6)=>{
    if(error6){
        return console.log ('error6',error6);
    }
        return console.log ('employes',emp6);
});


creat({name:'irfan',contact:8655639786},(error7,emp7)=>{
    if(error7){
        return console.log ('error7',error7);
    }
        return console.log ('employes',emp7);
});

creat({name:'afzal',contact:8693033786},(error8,emp)=>{
    if(error8){
        return console.log ('error8',error8);
    }
        return console.log ('employes',emp);
});


// findone(1,(error1,emp1)=>{
//     if(error1){
//        return console.log('error1',error1);
//     }
//     console.log('employes',emp1)
// });
// update(1,[{name:'hamaz',contact:8655639919,email:'hamaz786@gmail.com'}],(error2,emp2)=>{
//     if(error2){
//         return console.log('error2',error2);
//     }
//     console.log('employes',emp2);
// });
// dlete(1,(error3,data)=>{
//     if(error3){
//         return console.log('error3',error3);
//     }
//     console.log('employes',data)
// });
findall((error4,data)=>{
    if(error4){
        return console.log('error4',error4);
    }
    return console.log('employes',data)
});




    

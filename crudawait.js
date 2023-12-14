let employe=[]
function create(data){
    return new Promise ((res,rej)=>{
        if(typeof(data)!='object'){
            return rej('provide data in object')
        }
        if(typeof(data.name)!='string'){
            return rej('provide name in string')
        }
        if(typeof(data.contact)!='number'){
            return rej('provide contact in string')
        }
        let id=employe.length+1
        data.id=id
        employe.push(data)
        return res(data);
    })
}
function update(data,id){
    return new Promise ((res,rej)=>{
        if(typeof(id)!='number'){
            return rej('provide id in number')
        }
        if(id<1||id>employe.length||typeof(employe[id-1])!='object'){
            return rej('user not found')
        }
        let emp=employe[id-1]
        if(typeof(data)!='object'){
            return rej('provide data in object')
        }
        if(typeof(data.name)=='string'){
            emp.name=data.name
        }
        if(typeof(data.contact)=='number'){
            emp.contact=data.contact
        }
        employe[id-1]=emp
        return res(emp)
    })
}
function findone(id){
    return new Promise((res,rej)=>{
        if(typeof(id)!='number'||id<1||id>employe.length){
            return rej('user not found')
        }
        return res({data:employe[id-1]})
    })
}

function delet(id){
    return new Promise((res,rej)=>{
        if(typeof(id)!='number'){
            return rej('provide id in number')
        }
        if(id<1||id>employe.length||typeof(employe[id-1])!='object'){
            return rej('user not found')
        }
        return res('employe id is deleted')
    })
}

async function empdetails(){
    let creat=await create({name:'irfan',contact:1234}).catch((error)=>{console.log(error,error)})
    console.log(creat)
    let up=await update({name:'lenovo'},1).catch((error1)=>{console.log('error1',error1)});
    console.log(up)
    let read=await findone(1).catch((error2)=>{console.log('error',error2)});
    console.log(read)
    let del=await delet(1).catch((error3)=>{console.log('erroruyy',error3)})
    console.log(del);
}

empdetails();

let employedetail =[]
function creat(data){
    return new Promise((res,rej)=>{
        if (typeof(data)!='object'){
            return rej('please provide data as a pbject')
        }
        if(typeof(data.name)!='string'){
            return rej('please provide name as a string')
        }
        if(typeof(data.email)!='string'){
            return rej('please provide email as a string')
        }
        if(typeof(data.contact)!='number'){
            return rej('pleas provide conatact as a number')
        }
        let id=employedetail.length+1
        data.id=push(data)
        return res(data)
    });
}
function update(data,id){
    return new Promise((res,rej)=>{
        if(typeof(id)!='number'){
            return rej('please provid id as a number')
        }
        
    })
}
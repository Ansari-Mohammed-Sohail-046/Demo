function add(p1,p2){
    return new Promise((res,rej)=>{
        if(typeof(p1)!='number'){
            return rej('please proved p1 as a number');
        }
        if(typeof(p2)!='number'){
            return rej('please provide as a number');
        }
        let result=p1+p2
        return res(result);
    });
}
add(10,20).then((data)=>{
    console.log(data);
}).catch((error)=>{console.log(error);})
console.log('hello')

function subtraction(a1,a2){
    return new Promise((res,rej)=>{
        if(typeof(a1)!='number'){
            return rej('ples provide a1 as a number')
        }
        if(typeof(a2)!='number'){
            return rej('please provde a2 as a number')
        }
        let result1=a1-a2
        return res(result1);
    });
}
subtraction(30,10).then((data)=>{
    console.log(data);
}).catch((error1)=>{console.log(error1);})
console.log('hi')

function divid(b1,b2){
    return new Promise((res,rej)=>{
        if(typeof(b1)!='number'){
            return rej('please provide b1 AS NUMBER')
        }
        if(typeof(b2)!='number'){
            return rej('please provide b2 AS A NUMBER')
        }
        let result2=b1/b2
        return res(result2);
    });
}
divid(10,2).then((data)=>{
    console.log(data);
}).catch((error2)=>{console.log(error2);});
console.log('hii')

function multyplay(s1,s2){
    return new  Promise((res,rej)=>{
        if(typeof(s1)!='number'){
            return rej('please provide s1 as a number')
        }
        if(typeof(s2)!='number'){
            return rej('please provide s2 as a number')
        }
        let result3=s1*s2
        return res(result3);
    });
}
multyplay(40,8).then((data)=>{
    console.log(data);
}).catch((error3)=>{console.log(error3);});
console.log('hiii');
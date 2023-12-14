function add(p1,p2,CB){
    setTimeout(()=>{
        if(typeof(p1)!='number'){
            return CB('provide p1 as number')
        }
        if (typeof(p2)!='number'){
            return CB('provide p2 as a number')
        }
        return CB(null,p1+p2);
    },1000);
}

function multiplay(a1,a2,CB){
    setTimeout(()=>{
        if(typeof(a1)!='number'){
            return CB('provide a1 as a number')
        }
        if(typeof(a2)!='number'){
            return CB('provide a2 as a number')
        }
        return CB(null,a1*a2);
    },1000);
}
function subtraction(e1,e2,CB){
    setTimeout(()=>{
        if(typeof(e1)!='number'){
            return CB('provide e1 as a number')
        }
        if(typeof(e2)!='number'){
            return CB('provide e2 as a number')
        }
        return CB(null,e1-e2);
    },1000);
}
function divid(g1,g2,CB){
    setTimeout(()=>{
        if(typeof(g1)!='number'){
            return CB('provide g1 as a number')
        }
        if(typeof(g2)!='number'){
            return CB('provide g2 as a number')
        }
        return CB(null,g1/g2);
    },1000);
}

add(10,10,(error,data)=>{
    if(error){
        return console.log('error',error);
    }
    multiplay(data,2,(error1,mul)=>{
        if(error1){
            return console.log('error1',error);
        }
        subtraction(mul,10,(error2,sub)=>{
            if(error2){
                return console.log('error2',error)
            }
            divid(sub,2,(error3,div)=>{
                if(error3){
                    return console.log('error3',error)
                }
                console.log(div);
            })
        })
    })
})
let user=[]
function addusers(data){
    if (typeof(data)!= 'object'){
        return{data:'provide object'}
    }
    if (typeof(data.Name)!='string'){
        return{data:'provide string'}
    }
    if (typeof(data.Email)!='string'){
        return{data:'provide string'}
    }
    if (typeof(data.Password)!='string'){
        return{data:'provide string'}
    }
    let id =user.length+1
    data.id=id
    user.push(data)

    return{data:data}
}
let user1=addusers({Name:'acer',Email:'acer12@gmail.com',Password:'Acer@123'})
console.log(user1);

let user2=addusers({Name:'dell',Email:'dell27@yahoo.in',Password:'Dell@12121'})
console.log(user2);

let user3=addusers({Name:'Shadi',Email:'Any@shadi.com',Password:'asudxnadnu@2132323'})
console.log(user3);

function login(Email,Password){
    if (typeof(Email)!='string'){
        return{Error:'incorrect Email'}
    }
    if (typeof(Password)!='string'){
        return{Error:'incorrect Password'}
    }
    let check = false
    for (let i of user){
        if (i.Email==Email && i.Password==Password){
            check=true;
            break;
        }
    }
if (check){
    return{data:'login successful'}
}
return{Error:'User not Found'}
}
let login0=login('acer12@gmail.com','Acer@123')

console.log(login0);
















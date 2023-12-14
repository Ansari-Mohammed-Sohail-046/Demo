
// function add(p1,p2,CB){
//     setTimeout(()=>{
//         CB(p1+p2);
//     },1000);
// }
// add(10,20,(result)=>{console.log(result)});
// add(10,20,(result)=>{console.log(result*2)});

// function subtraction(a1,a2,AB){
//     setTimeout(()=>{
//         AB(a1-a2);
//     },1000);
// }
// subtraction(30,20,(result)=>{console.log(result)});
// subtraction(30,20,(result)=>{console.log(result+50)});

// function divid(b1,b2,BC){
//     setTimeout(()=>{
//         BC(b1/b2);
//     },1000);
// }
// divid(10,2,(result)=>{console.log(result)});
// divid(10,2,(result)=>{console.log(result*2)});

// function multiplay(c1,c2,CB){
//     setTimeout(()=>{
//         CB(c1*c2);
//     },1000);
// }
// multiplay(10,2,(result)=>{console.log(result)});
// multiplay(10,2,)
 


// function add(d1, d2, CB) {
//     setTimeout(() => {
//         if (typeof (d1) != 'number') {
//             return CB('provide d1 as a number')
//         }
//         if (typeof (d2) != 'number') {
//             return CB('provide d2 as a number')
//         }
//         return CB(null, d1 + d2);
//     }, 1000);
// }

// add(15, 10, (error, data) => {
//     if (error) {
//         console.log("error", error);
//     }
//     console.log("data", data);
// });

// function subtraction(e1, e2, CB) {
//     setTimeout(() => {
//         if (typeof (e1) != 'number') {
//             return CB('provide e1 as a number')
//         }
//         if (typeof (e2) != 'number') {
//             return CB('provide e2 as a number')
//         }
//         return CB(null, e1 - e2);
//     }, 1000);
// }

// subtraction(20, 2, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     console.log('data', data)
// })

// function multiplay(f1, f2, CB) {
//     setTimeout(() => {
//         if (typeof (f1) != 'number') {
//             return CB('provide as f1 as a number')
//         }
//         if (typeof (f2) != 'number') {
//             return CB('provide f2 as a number')
//         }
//         return CB(null, f1 * f2);
//     }, 1000);
// }
// multiplay(20, 8, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     console.log('data', data);
// })

// function divid(g1, g2, CB) {
//     setTimeout(() => {
//         if (typeof (g1) != 'number') {
//             return CB('provide g1 as a number')
//         }
//         if (typeof (g2) != 'number') {
//             return CB('provide g2 as a number')
//         }
//         return CB(null, g1 / g2);
//     }, 1000);
// }

// divid(80, 8, (error, data) => {
//     if (error) {
//         return console.log('error', error);
//     }
//     console.log('data', data)
// })




//*********************task***********************

function verfiy(veri, CB) {
    let add = {}
    setTimeout(() => {
        if (typeof (veri) != 'object') {
            return CB('provide veri as a oibjrct')
        }
        for (let i of veri) {
            if (i.name) {
                add[i.name] = true
                continue;
            }
            return CB(add)
        }
        return CB(null, add)

    }, 1000);
}
verfiy([{ name: 'abc' }, { name: 'pqr' }, { name: 'mnl' }], (error, result) => {
    if (error) {
        return console.log('error',error)
    }
    return console.log('result',result)
});

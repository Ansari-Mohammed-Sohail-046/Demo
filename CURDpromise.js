let employees = [];
function creat(data) {
    return new Promise((res, rej) => {
        if (typeof (data) != 'object') {
            return rej('pleas provide object')
        }
        if (typeof (data.name) != 'string') {
            return rej('please provide name in string')
        }
        if (typeof (data.contact) != 'number') {
            return rej('please provide contact as a number')
        }
        let id = employees.length + 1
        data.id = id
        employees.push(data);
        return res(data);
    });
}


function findOne(id) {
    return new Promise((res, rej) => {
        if (typeof (id) != 'number') {
            return rej('please provide id as a number')
        }
        let emp = employees[id - 1];
        if (typeof (emp) != 'object') {
            return rej('Employee is not found')
        }
        return res(emp);
    })
}

function update(id, data) {
    return new Promise((res, rej) => {
        if (typeof (id) != 'number') {
            return rej('please provide id as a number')
        }
        let emp1 = employees[id - 1];
        if (typeof (emp1) != 'object') {
            return rej('please proved emp as a object')
        }
        if (typeof (data) != 'object') {
            return rej('pleas provide data as a object')
        }
        if (typeof (data.name) == 'string') {
            emp1.name = data.name
        }
        if (typeof (data.email) == "string") {
            emp1.email = data.email
        }
        if (typeof (data.contact) == 'number') {
            emp1.contact = data.contact
        }
        employees[id - 1] = emp1
        return res(emp1)

    });
}


creat({ name: 'sohail', contact: 8693033715 }).then((data) => { console.log('data',data) })
    .catch((error) => { console.log('error', error) });

creat({ name: 'hamza', contact: 8655639919 }).then((data1) => { console.log('data1',data1) })
    .catch((error1) => { console.log('error1',error1) });

// let emp1 = findOne(1);
// emp1.then((data2) => { console.log(data2) })
//     .catch((error2) => { console.log(error2, error2) });

update(1, { name: 'Shoeb' }).then((data2) => { console.log('data2',data2) })
    .catch((error2)=>{console.log('error2',error2)});
// normal --- Named 
// Araay Object --------- Anonymous 
// callback --------- Arrow



// function laptop(){
//     console.log("Hello User")
//     console.log("Welcome User")
//     console.log("May i Help You")
//     console.log("Bye")
// }

// laptop()
// console.log("**********************************")
// laptop()

// function sum(){
//     console.log(100000+500000)
// }

// function sum2(){
//     let a = 60000
//     let b = 751320
//     console.log(a + b)
// }
                                     // number taken by parameters   //

// function sum3(j,s){
// console.log(j+s)
// }

// sum()
// sum2()
// sum3(78946,32154)
// sum3(16545135,165451322);

// function mul(m1,m2){
//     console.log("the answer is",m1*m2)
// }
// mul(20,20)
// mul(100,100)
//           console.log("//////////multiply////////////")
// function div(d1,d2){
//     console.log("the answer is",d1/d2)
// }
// div(100,20)
// div(2000,3)
//         console.log("//////////division///////////")
// function modu(mo1,mo2){
//     console.log("the answer is",mo1%mo2)
// }
// modu(8020,201)
// modu(1000,20)
//      console.log("/////////////Modulus///////////")

// function subs(){
//     let a = 6444900
//     let b = 7897890
//     let c = a-b
//     console.log(c)
// }

// subs()

// function add(a,b){
// console.log(a+b)
// }
// add(654,654)

// function add(c,d){
//     return c+d
//     console.log('hello')
// }
// let total = add(10000,6151);
// console.log(total);

// function addi(){
//     console.log(arguments)
// }

// addi(12,15,4,5,1,34);

// let arr =[]
// function sub(){
//     for (let i of arguments){
//         arr.push(i)
//     }
// }
// sub("acer","dell","asus")
// console.log(arr);


// function first(){
//     console.log(arguments[0]);
// }
// first(34,45);

// let user = {}
// function createuser(name,email,contact,address){
//     if(typeof(name) !='string'){
//     return('provide name in string')
// }
// if(typeof(email) != "string"){
// return('provide email on string')
// }
// if (typeof(contact) != 'number'){
//     return('provide contact in number')
// }
// if (typeof(address) != 'string'){
// return('provide address in string')
// }
// user.name = name
// user.email = email
// user.contact = contact
// user.address = address
// return(user)
// }
// console.log(createuser('irfan','irfan@gmail.com',1234567798,'mahim'));

// let admin = {name:'irfan',age:20,password:'123456'}
// let admin2 = {name:'afzal',age:22,password:'215145'}
// function verify(p1){
//     if(typeof(p1) != 'object'){
//         return('provide data in object')
//     }
//     if(p1.name != 'irfan'){
//         return('incorrect name')
//     }
//     if(p1.password != "123456"){
//         return('wrong password')
//     }
//     return('you are admin')
// }
// console.log(verify(admin));


// let laptop = {name:'acer',age:21,password:'kurla'}
// function verify(v1){
//     if(typeof(v1) != 'object'){
//     return('provide in object')
// }
// if(v1.name != 'acer'){
//     return('incorrect name')
// }
// if(v1.password != 'kurla'){
//     return('provide incorrect password')
// }
// return('login successfully')
// }
// console.log(verify(laptop));

// let admin ={name:'irfan',age:21,password:'123456'}
// function verify(name,password){
    
//     if(name != 'irfan'||
//     password != '123456'){
//     return('id password is wrong')
// }

// return('login successfully')
// }
// console.log(verify("irfan","123456"));






// let admin ={name:'irfan',age:21,password:'123456'}
// function verify(name,password){
    
//     if(admin.name != 'irfan',
//     admin.password != '123456'){
//     return('invalid user')

// }
// }
// verify('irfan','123456');
// console.log(verify(admin));


// let a_name ='irfan'
// let a_password = '1234'
// function verifyadmin(ad_name,ad_password){
//     if(a_name !='ad_name'|| a_password!=ad_password){
//         return('invalid name and password')
//     }
//     return('Welcome user')
// }
// console.log(verifyadmin('irfan','1234'))
// a_password ='123456'
// console.log(verifyadmin('irfan','1234'));

// function verifyage(age){
//     if(age >=18 && age<=100 ){
//         return('are able to vote')
//     }
//         return('unable to vote')
// }
// console.log(verifyage(101));
// let list =[12,5,10,3,21,2,5,6]


// function verify(l,n){
//     let smaller =[]
//     let greater =[]
//     if (!Array.isArray(l)){
//         return('the list is not array')
//     }
//     if (typeof(n)!='number'){                    ///object in array//
//         return('provide number')
//     }
//     for (let i of l){
//         if (i<n){
//             smaller.push(i)
//         }
//         if (i>n){
//             greater.push(i)
//         }
//     }
//     return({smaller,greater})
// }   
// console.log(verify([12,1,5,6,7,4,8,9,10,12],5));



// function add(){
//     let a=10+20
//     return a;
// }
// add();
// console.log(add());

// let add=function(){
//     let a = 10+20
//     return a;
// }
// add();

/////////////////////////////////anonymous function////////////////////////////////////

// let user ={
//     name:'abc'
//     getAge:function(){
// }
// }
// user.getage();

// let add = function(p1,p2){
//     return p1+p2;
// }
// let result = add(20,20);
// console.log(result);

// console.log('➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕ ADD ➕➕➕➕➕➕➕➕➕➕➕➕➕➕');

// let sub=function(s1,s2){
//     return s1-s2
// }
// let result1=sub(20,10)
// console.log(result1);

// console.log('➖➖➖➖➖➖➖➖➖➖➖➖➖  sub  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖');

// let multiply = function(m1,m2){
//     return m1*m2
// }
// let result2=multiply(20,1000)
// console.log(result2)

// console.log('✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️ multiply ✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️');

// let div=function(d1,d2){
//     return d1/d2
// }
// let result3=div(10000,10)
// console.log(result3);

// console.log('➗➗➗➗➗➗➗➗➗➗➗ DIVIDE ➗➗➗➗➗➗➗➗➗➗➗➗➗  ');


/////////////////////////Arrow function/////////////////////////////////


// let add =()=>{
//     return 10+50
// }
// add();
// let addresult =add();
// console.log(addresult);

// let display = p => console.log(p);
// display('abc');


// let sub =()=>{
//     return 32-5
// }
// sub()
// let subresult=sub()
// console.log(sub());

// let multiply =()=>{
//     return 2020*2020
// }
// multiply();
// let mulresult=multiply()
// console.log(multiply());


// let div=()=>{
//     return 1000/20
// }
// div()
// let divresult=div()
// console.log(div());
































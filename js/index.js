// let age = 30;
// const a =50;

// // a = 60
// age = 23;
// console.log(age);
// console.log("nih");
// console.log("我的年龄是" + age + "岁");
// console.log(`我的年龄是 ${age}  ${a}`);
// // alert("哈哈哈");
// document.write("嘿嘿嘿");
// // let aa = prompt("shuru");
// // alert(aa);

// let obj = Object()

// obj.name = "孙悟空"
// obj.age = 520
// obj.gender = "男"
// delete obj.gender
// // console.log(obj);

// // let obj2 = {
// //     name :"孙悟空",
// //     age : 23,
// //     gender:"男"
// // }

// // // console.log(obj2)

// // for (let proNum in obj2) {
// //     console.log(proNum,obj2[proNum]);
// // }

// // function fn(){
// //     console.log(123);
// //     console.log(12);
// //     console.log(23);
// //     console.log("sas1");
// // }

// // fn()

// //  const fn2 = function(){
// //     console.log("函数表达式");
// //  }

// //  const fn3 = ()=>{
// //     console.log("箭头函数");
// //  }


// //  fn2()
// //  fn3()

// // function fn4(a){
// //     console.log("a = ",a);
// // }

// // fn4("was")

// // class Person{
    
// // }


// // const p1 = new Person();
// // console.log(p1);


// class Person{
//     #name;
//     #age
//     #gender
//     constructor(name,age,gender){
//         this.#name = name
//         this.#age = age
//         this.#gender = gender
//     }
//     getName(){
//         return this.#name
//     }
//     setName(name){
//         this.#name = name
//     }
//     getAge(){
//         return this.#age;
//     }
//     setAge(age){
//         this.#age = age;
//     }   
//     getGender(){
//         return this.#gender
//     }
// }

// const p1 = new Person("孙悟空" , 18 , "男")

// console.log(p1.getName())
// p1.setName("猪八戒")
// console.log(p1.getName())


// function outer(){
//     let num = 0;
//     return () =>{
//         num++;
//         console.log(num);
//     }
// }

// const newNum = outer();
// newNum();

let str = "dajsdh13715678903jasdlakdkjg13457890657djashdjka13811678908sdadadasd";

 let re = /(1[3-9]\d)\d{4}(\d{4})/g;

 let result
 while((result = re.exec(str))){
    console.log(result[1] + "****" + result[2]);
 }


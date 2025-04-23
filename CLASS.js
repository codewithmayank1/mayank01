// WHat are classes in java script=>Blue pirnt or template for object creation
// Adbvantages
// 1. Code reusability
// 2. Easy to maintain
//oops features
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction
// 5. Data hiding
// Object is a collection of properties and methods(key and value pair)
// let dog={
//     dogname:"dog",
//     dogage:10,
//     dogcolor:"black",
//     dogbreed:"german shephard",
//     dogweight:10,
// }
// console.log(dog.dogname);
// console.log(dog.dogage);
// console.log(dog.dogcolor);
// console.log(dog.dogbreed);

// Constructor characteristics

// 1. Constructor name should be capitalized
// 2. Constructor should be called with new keyword
// 3. Constructor should be called with new keyword
// 4. Constructor should be called with new keyword
// This keyword
// Difference between this.prop and prop
// 1. this.prop is a property of the object and prop is a local variable

// class Classname{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;

//     }
// }
// let obj=new Classname("value1","value2");
// let obj2=new Classname("value3","value4");
// console.log(obj.prop1);
// console.log(obj.prop2);
// console.log(obj2.prop1);
// console.log(obj.prop1);
// console.log(obj.prop2);
// // console.log(obj.prop3); //undefined
// // // console.log(obj.prop4); //undefined
// function Dog(dogname,dogage,dogcolor,dogbreed,dogweight){
//     this.dogname=dogname;
//     this.dogage=dogage;
//     this.dogcolor=dogcolor;
//     this.dogbreed=dogbreed;
//     this.dogweight=dogweight;

// }
// let dog1=  new Dog("dog1",10,"black","german shephard",10);
// console.log(dog1.dogname);
// console.log(dog1.dogage);
// console.log(dog1.dogcolor);
// console.log(dog1.dogbreed);
// console.log(dog1.dogweight);
// this is used for object creation
// It  is convention to  start the classanme in capitalization
// class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let person1=new person("Nishkarsh","Pandey");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// console.log("Hello",person1.firstname,person1.lastname,"Nice to meet you");
// Methods orther than constructor

// Methods are the function in the class containing data and functions(methods)
// No need of function keyworrd in mtehods and can directly start with the name of the method
//Coinstruyctor is udes to initialize the object and methods are used to perform the operations on the object
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
//     compliment(){
//         console.log("You are doing great",this.firstname,this.lastname);
//     }
// }
// let person1=new Person("Mayank","Maurya");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// person1.greet();
// person1.compliment();

// class person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
//     }
// }

//PROPERTIES
//IT sometimes called as attributes or fields
//IT is used to store the data of the object
//IT is used to define the state of the object

// constructor(firstname,lastname){
//     if(firstname.startsWith("N")){
//         this.firstname=firstname;

// } else{
//         console.log("Firstname should start with N")
//     }
//     this.lastname=lastname;
// }

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname= firstname;
//         this.#lastname=lastname;

//     }
//     get firstname(){
//         return this.#firstname;

//     }
//     set firstname(firstname) {
//         this.#firstname=firstname;

//     }
//     get lastname(){
//         return this.#lastname
//     }
// }

//INHERITANCE
// it means reusability of code, matlb aisa code jo sari class me comon ho
// it is a concept that allows a class to inherit the properties and methods of another class
// it is used to create a new class from an existing class

// class vehicle{
//     constructor(brand,model,year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }
//     move(){
//         console.log("moving at",this.speed,"km/h");
//     }
//     accelerate(amount){
//         this.currentspeed+=amount;
//     }
// }

// class motorcycle extends vehicle {
//     constructor(color,currentspeed,fuel,maxspeed) {
//         super(color,maxspeed,currentspeed);
//         this.fuel=this.fuel;
//     }
//     dowheelie(){
//         console.log("driving on one wheel");
//     }
// }

// let motor  = new motorcycle("red",0,10,"gasoline");
// console.log(motor.color);
// motor.accelerate(20);
// motor.move();

// class person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
//   }
// }

//PROtotypes
// It is a property of the object which is used to add new properties and methods to the object
// It is used to add new properties and methods to the object without modifying the object itself

class person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
  }
}

person.prototype.introduce = function () {
  console.log("Hi", this.firstname, "Nice to meet you");
}
let p=new person("Nishkarsh", "Pandey");



var age=21;
console.log(typeof age);
function Employee(name,address){
	this.name=name;
	this.address=address;
}
var emp1=new Employee("xyz","shaikpet");
console.log(emp1 instanceof Employee);
console.log(emp1 instanceof string);
//Design a class for employee which takes id and name in during construction of object and has a salary property
//Create Manager class who is an employee and can have department property
var Employee = function (id,name){

        if(!id || !name){
            throw new Error("Employee id and name are mandatory")
        }
        this.id = id;
        this.name = name;
};

Employee.prototype.setSalary = function (salary){
    this.salary = salary;
}

Employee.prototype.getId = function (){
    return this.id;
}

Employee.prototype.getName = function (){
    return this.name;
}

Employee.prototype.getSalary = function() {
    return this.salary;
}

var Manager = function (params){
    Employee.apply(this, arguments);// "this" provides the context of the Manager and arguments gives the arguments for employee.
}

Manager.prototype = Object.create(Employee.prototype);//so we can get all funcs of employee 
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function(department){
    this.department = department;
}

Manager.prototype.getDepartment = function(){
    return this.department;
}

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
console.log(employee.getId());
console.log(employee.getName());
console.log(employee.getSalary());

const manager = new Manager(2,"John");
manager.setSalary(10000);
manager.setDepartment("IT");
console.log(manager.getId());
console.log(manager.getName());
console.log(manager.getSalary());
console.log(manager.getDepartment());




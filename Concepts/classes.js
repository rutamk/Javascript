//Design a class for employee which takes id and name in during construction of object and has a salary property
//Create Manager class who is an employee and can have department property
class Employee{
    constructor(id,name){
        if(!id || !name){
            throw new Error("Employee id and name are mandatory")
        }
        this.id = id;
        this.name = name;
    }

    setSalary(salary){
        this.salary = salary;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getSalary(){
        return this.salary;
    }
}

class Manager extends Employee{
    setDepartment(department){
        this.department = department;
    }

    getDepartment(){
        return this.department;
    }
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




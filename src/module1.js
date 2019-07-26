export default class Developer {
    constructor(name, age, salary, department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }

    increaseSalary() {
        let newSalary = this.salary + 10000;
        console.log(newSalary);
    }

    displayInfo() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);
        console.log(this.department);
    }
}
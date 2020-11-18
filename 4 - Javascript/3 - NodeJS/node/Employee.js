class Employee
{
    constructor(age, name, marks)
    {
        this.age = age;
        this.name = name;
        this.marks = marks;
    }
    getMarks(){
        return (this.marks - 1);
    }
}

module.exports = Employee;
var john = {
    name: 'John',
    yearOfBirth: 1997,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = new Person('John', 1997, 'teacher');

john.calculateAge();
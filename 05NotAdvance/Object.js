var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(courseCount){
        console.log(`Course count is: ${this.courseCount}`)
    }
}

var hitesh = new User("Hitesh",2);
console.log(hitesh);

var ketan = new User("Ketan",4);
console.log(ketan)

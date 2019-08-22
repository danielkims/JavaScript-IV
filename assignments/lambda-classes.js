// CODE here for your Lambda Classes
​class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
​
class Instructor extends Person {
    constructor(instrAttributes) {
        super(instrAttributes)
        this.specialty = instrAttributes.specialty
        this.favLanguage = instrAttributes.favLanguage
        this.catchPhrase = instrAttributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} received a perfect score on ${subject}`); 
    }
}​

class Student extends Person {
    constructor(stdntAttributes) {
        super(stdntAttributes)
        this.previousBackground = stdntAttributes.previousBackground
        this.className = stdntAttributes.className
        this.favSubjects = stdntAttributes.favSubjects
    }
    listsSubjects() {
        this.favSubjects.forEach(subjects => {
            console.log(`${subjects}`);
        })
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    springChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class projectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName
        this.favInstructor = pmAttributes.favInstructor
    }
    standup(channel) {
        console.log(`@${channel} standup time`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const persons = new Person({
    name: "Rick",
    age: 28,
    location: "California"
})

const instructors = new Instructor({
    name: "Charlie",
    age: 34,
    location: "Texas",
    favLanguage: "JavaScript",
    specialty: "Front-End",
    catchPhrase: "Hello"
})

const students = new Student({
    name: "Linda",
    location: "Nevada",
    age: 31,
    previousBackground: "None",
    className: "Full-Stack Web Development",
    favSubjects: "Web Fundamental"
})

const pManager = new projectManager({
    name: "John",
    location: "Arizona",
    age: 29,
    favLanguage: "Python",
    specialty: "Back-End",
    catchPhrase: "Hi",
    gradClassName: "CS1",
    favInstructor: "Simon"
})
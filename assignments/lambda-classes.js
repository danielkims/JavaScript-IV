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
    grade(studentObject, subject) {
        console.log(`${studentObject.name} received a perfect score on ${subject}`); 
    }
}​



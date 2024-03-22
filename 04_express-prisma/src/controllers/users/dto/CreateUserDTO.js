export class CreateUserDTO {
    id;
    firstName;
    lastName;
    age;
    email;

    constructor (id, firstName, lastName, age, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getNewUser() {
        return{
            id: this.id,
            firstName: this.firstName,
            lastName : this.lastName,
            age: this.age,
            email: this.email,
        };
    }
}
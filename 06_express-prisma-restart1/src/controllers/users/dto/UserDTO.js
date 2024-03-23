export class UserDTO {
    id;
    firstName;
    lastName;
    age;
    email;

    constructor(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.email = user.email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
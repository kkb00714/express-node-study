export class CreateUserDTO {
    id;
    firstName;
    lastName;
    age;
    email;
    password;

    constructor (user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.email = user.email;
        this.password = user.password;
    }
}
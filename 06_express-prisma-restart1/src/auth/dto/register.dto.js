import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export class RegisterDTO {
    id;
    name;
    email;
    phoneNumber;
    age;
    password;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.phoneNumber = props.phoneNumber;
        this.age = props.age;
        this.password = props.password;
    }

    async hashPassword() {
        const hashedPassword = await bcrypt.hash(
            this.password, 
            process.env.PASSWORD_SALT
        );

        return hashedPassword;
    }
}
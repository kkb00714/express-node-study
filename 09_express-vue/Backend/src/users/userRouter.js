const { Router } = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql')

// Router
class UserController {
    router;
    path = "/users";

    constructor() {
        this.router = Router();
        this.init();
        // this.users.push({
        //     id: 'Leopold',
        //     password: "Leopold123",
        //     name: "Leopold",
        //     age: 29,
        //     email: "Seoanjoa19@example.com",
        //     phoneNumber: "010-1234-5678"
        // });
    }

    init() {
        this.router.get("", this.userLogin.bind(this)),
        this.router.get("/list", this.getUsers.bind(this)),
        this.router.post("/register", this.userRegister.bind(this)),
        this.router.get("/login", this.userLogin.bind(this)),
        this.router.get("/logout", this.userLogout.bind(this));
    }

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'usertestdb',
        authPlugin: 'mysql_native_password'
    });

    // 유저 목록 조회 (read) => 확인용 (페이지 등록 x)
    getUsers(req, res, next) {
        // res.status(200).json({ users: this.users });
        res.send(this.users);
        
    }

    // 회원가입, 로그인 메인 페이지

    userLogin (req, res, next) {
        res.send("회원가입, 로그인 선택 페이지 입니다.");
    }

    // 유저 회원가입 (create)

    async userRegister (req, res, next) {
        try {
            const { username, password, name, age, email, phoneNumber } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { username, password: hashedPassword, name, age, email, phoneNumber };
            
            this.connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
                if (error) {
                    console.log('회원가입 오류 발생 : ', error);
                    res.status(500).json({ error: '서버 오류' });
                    return;
                }
                res.status(201).json({ message: '회원가입 성공! 환영합니다!' });
            });
        } catch (error) {
            console.log('회원가입 오류: ', error);
            res.status(500).json({error: '서버 오류' });
        }
        
        
    }



    userLogout(req, res, next) {
        res.send('로그아웃')
    }

}

const userController = new UserController();
module.exports = userController; 
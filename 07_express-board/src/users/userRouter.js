// const { Router } = require('express');

// // Router
// class UserController {
//     router;
//     path = "/users";
//     users = [];

//     constructor() {
//         this.router = Router();
//         this.init();
//         this.users.push({
//             id: 'Leopold',
//             password: "Leopold123",
//             name: "Leopold Kronoa",
//             age: 29,
//             email: "Seoanjoa19@example.com",
//             phoneNumber: "01012345678"
//         });
//     }

//     init() {
//         this.router.get("", this.userLogin.bind(this)),
//         this.router.post("/register", this.userRegister.bind(this)),
//         this.router.get("/list", this.getUsers.bind(this));
//     }

//     // 회원가입, 로그인 메인 페이지

//     userLogin (req, res, next) {
//         res.send("회원가입, 로그인 선택 페이지 입니다.");
//     }

//     // 유저 회원가입 (create)

//     userRegister (req, res, next) {
        
//         const { id, password, name, age, email, phoneNumber } = req.body;

//         const newUser = { id, password, name, age, email, phoneNumber };
//         this.users.push({newUser});

//         // response
//         // res.status(201).json({ message: "회원가입 성공", users : this.users });
//         res.send('유저 생성 성공');
        
//     }

//     // 유저 목록 조회 (read)
//     getUsers(req, res, next) {
//         // res.status(200).json({ users: this.users });
//         res.send(this.users);
        
//     }

// }

// const userController = new UserController();
// module.exports = userController; 
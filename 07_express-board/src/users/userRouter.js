const { Router } = require('express');

// Router
class UserController {
    router;
    path = "/users";
    users = [];

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("", this.userLogin.bind(this)),
        this.router.post("/register", this.userRegister.bind(this)),
        this.router.get("/list", this.getUsers.bind(this));
    }

    // 회원가입, 로그인 메인 페이지

    userLogin (req, res, next) {
        res.send("회원가입, 로그인 선택 페이지 입니다.");
    }

    // 유저 회원가입 (create)

    userRegister (req, res, next) {
        try {
            const { id, password, name, age, email, phoneNumber } = req.body;

            const newUser = { id, password, name, age, email, phoneNumber };
            this.users.push({newUser});

            // response
            res.status(201).json({ message: "회원가입 성공", users : this.users });
        } catch (err) {
            console.error("회원가입에 실패했습니다.", err);
            res.status(500).json({ error: "서버에 오류가 발생했습니다."});
        }
    }

    // 유저 목록 조회 (read)
    getUsers(req, res, next) {
        try {
            res.status(200).json({ users: this.users });
        } catch (err) {
            console.error("유저 목록 조회에 실패했습니다.", err);
            res.status(500).json({ error: "서버에 오류가 발생했습니다." });
        }
    }

}

const userController = new UserController();
module.exports = userController; 
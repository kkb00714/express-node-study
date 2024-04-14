const { Router } = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql')

// Router
class UserController {
    router;
    path = "/users"; // 사용자 관련 API의 기본 경로
    commonUsers = []; // 공통 사용자 목록을 저장할 배열

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        // 라우터의 경로 및 해당 결호에 대한 메서드를 연결
        this.router.get("", this.userLogin.bind(this)),
        this.router.get("/list", this.getUsers.bind(this)),
        this.router.post("/register", this.userRegister.bind(this)),
        this.router.post("/login", this.userLogin.bind(this)),
        this.router.post("/logout", this.userLogout.bind(this));
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
        res.send(this.users);
    }1

    // 메인 페이지 기능 - 회원가입, 로그인, 로그아웃 + 유저 조회

    // 일반 유저 부분
    // 회원가입
    
    async userRegister (req, res, next) {
        try {
            const { username, password, name, age, email, phoneNumber, userType } = req.body;
            // 요청에서 필요한 정보 추출
            const hashedPassword = await bcrypt.hash(password, 10);
            // 비밀번호 해싱
            const newUser = { username, password: hashedPassword, name, age, email, phoneNumber, userType };
            // 새로운 사용자 객체 생성
            
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


    // 로그인
    async userLogin (req, res, next) {
        const { username, password } = req.body;
        this.connection.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
            if (error) {
                console.log('로그인 오류', error);
                res.status(500).json({ error: '서버 오류' });
                return;
            }
            if (results.length === 0) {
                res.status(404).json({ error: '사용자가 존재하지 않습니다.' });
                return;
            }
            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                res.status(401).json({ error: '비밀번호가 틀렸습니다.' });
                return;
            }
            res.status(200).json({ message: '로그인 성공' });
        });
    }


    // 로그아웃
    userLogout(req, res, next) {
        if (req.session) {
            delete req.session.user;
            res.status(200).json({ message: '로그아웃이 완료되었습니다.' })
        } else {
            res.status(500).json({ message: '로그아웃에 실패했습니다.' })
        }
    }

}

// -----------------------------------------------

// Creator 부분 
// 회원가입

// 로그인

// 로그아웃


const userController = new UserController();
module.exports = userController; 
// 크리에이터 부분 (기존 회원가입에서 추가적인 데이터 입력)

const { Router } = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql')

class CreatorController {
    router;
    path = "/creators";
    creatorUsers = [];

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/", this.creatorLogin.bind(this));
        this.router.get("/:username", this.getCreators.bind(this));
        this.router.post("/register", this.creatorRegister.bind(this));
        this.router.post("/login", this.creatorLogin.bind(this));
        this.router.post("/logout", this.creatorLogout.bind(this));
    }

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'usertestdb'
    });

    // 크리에이터 상세보기 
    getCreators(req, res, next) {
        try {
            const { username } = req.body;
            // 크리에이터 값 클릭 시 username 을 함께 받아옴
            this.connection.query('SELECT name, email FROM creators WHERE username = ?', [username], (error, results, fields) => {
                if (error) {
                    console.error('크리에이터 정보를 가져오는 중 에러 발생:', error);
                    res.status(500).json({ error: '서버 에러: 크리에이터 정보를 가져오는 중 에러 발생' });
                    return;
                }
    
                // 쿼리 결과가 없으면 작가를 찾을 수 없는 것이므로 404 에러를 응답으로 보냅니다.
                if (results.length === 0) {
                    res.status(404).json({ error: '작가를 찾을 수 없습니다.' });
                    return;
                }
    
                // 쿼리 결과가 있으면 작가의 이름(name)과 이메일(email)을 응답에 포함하여 보냅니다.
                res.json({ name: results[0].name, email: results[0].email });
            });
        } catch (error) {
            console.error('크리에이터 정보를 가져오는 중 에러 발생:', error);
            res.status(500).json({ error: '서버 에러: 크리에이터 정보를 가져오는 중 에러 발생' });
        }
    }

    async creatorRegister(req, res, next) {
        try {
            const { username, password, name, age, email, phoneNumber, accounts_bank, accounts_number, userType } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newCreator = { username, password: hashedPassword, name, age, email, phoneNumber, accounts_bank, accounts_number, userType };

            this.connection.query('INSERT INTO creators SET ?', newCreator, (error, results) => {
                if (error) {
                    console.log('크리에이터 회원가입 오류 발생: ', error);
                    res.status(500).json({ error: '서버 오류' });
                    return;
                }
                res.status(201).json({ message: '크리에이터 회원가입 성공! 환영합니다!' });
            });
        } catch (error) {
            console.log('크리에이터 회원가입 오류: ', error);
            res.status(500).json({ error: '서버 오류' });
        }
    }

    async creatorLogin(req, res, next) {
        const { username, password, userType } = req.body;

        // 세션에 저장된 userType이 있는지 확인
        const storedUserType = req.session.userType;

        // userType이 저장된 userType과 다른 경우 에러 반환
        if (storedUserType && storedUserType !== userType) {
            return res.status(400).json({ error: '잘못된 사용자 유형입니다.' });
        }

        this.connection.query('SELECT * FROM creators WHERE username = ?', [username], async (error, results) => {
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

    creatorLogout(req, res, next) {
        if (req.session) {
            delete req.session.user;
            res.status(200).json({ message: '로그아웃이 완료되었습니다.' })
        } else {
            res.status(500).json({ message: '로그아웃에 실패했습니다.' })
        }
    }
    
}

const creatorController = new CreatorController();
module.exports = creatorController; 
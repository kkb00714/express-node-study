const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session')

const userController = require('./controllers/userController');

const app = express();

app.use(session({
    secret : '!@#%@!$@#&(%^/+-@!@!', // 세션의 비밀키
    resave: false, // 변경 x 세션은 저장하지 않음
    saveUninitialized: true // 초기화 x 세션을 저장
}));

app.use(cors());
// cors 정책을 허용하기 위함

app.use(helmet());
// 보안 헤더를 설정하기 위함

app.use(express.json());
// json 파싱을 위함

app.use(bodyParser.urlencoded({ extended: true }));
// url 인코딩된 요청 바디를 파싱하기 위함

app.use(bodyParser.json());
// json 요청 바디를 파싱하기 위함


userController.forEach((controller) => {
    // 각 controller의 path와 router를 등록
    app.use(controller.path, controller.router);
});

app.get("/", (req, res) => {
    res.send("회원가입 로그인 진짜 만들어보자고 ㄱㄱ");
});

app.listen(8000, (req, res) => {
    console.log("서버가 시작됩니다");
});
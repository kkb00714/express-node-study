const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const UserController = require("./users/userRouter");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(UserController.path, UserController.router);

app.get("/", (req, res) => {
    res.send("회원가입 로그인 진짜 만들어보자고 ㄱㄱ");
});

app.listen(8000, (req, res) => {
    console.log("서버가 시작됩니다");
});
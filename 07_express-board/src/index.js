const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

const users = [{
    id: 'Leopold',
    password: "Leopold123",
    name: "Leopold Kronoa",
    age: 29,
    email: "Seoanjoa19@example.com",
    phoneNumber: "01012345678"
}];

app.use(cors());
// cors 정책을 허용하기 위함

app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/users/list", (req, res) => {
    res.send(users);
});

app.post("/users/register", (req, res) => {
    const { id, password, name, age, email, phoneNumber } = req.body;
    users.push({
        id,
        name,
        password,
        age,
        email,
        phoneNumber
    });
    return res.send('생성 성공');
})


app.get("/", (req, res) => {
    res.send("회원가입 로그인 진짜 만들어보자고 ㄱㄱ");
});

app.listen(8000, (req, res) => {
    console.log("서버가 시작됩니다");
});
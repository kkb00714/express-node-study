const express = require('express');
const app = express();

const users = [{
    id : 'Leopold',
    name : "Leopold123",
    password : "Leopold1324",
    age : 29,
    email : "Seoanjoha19@naver.com",
    phoneNumber : "010-0000-0000"
}];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users/list', (req, res) => {
    res.send(users);
});

app.post('/users/register', (req, res) => {
    const { id, name, password, age, email, phoneNumber } = req.body;
    users.push({
        id,
        name,
        password,
        age,
        email,
        phoneNumber
    });
    return res.send('생성 성공');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, (req, res) => {
    console.log("서버가 시작됩니다!");
});


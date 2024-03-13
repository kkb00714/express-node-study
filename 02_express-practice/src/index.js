import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dayjs from 'dayjs';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const app = express(); 

// express에서 라이브러리를 사용하는 방법
// => app.use()

// 사용된 미들웨어 => cors, helmet, express.json, express.urlencoded

app.use(cors(
    //{
    // 특정 도메인을 제한하는 방법

    // origin : "https://www.naver.com",
    // => 네이버라는 도메인으로 요청을 보내야지만
    //    서버가 응답을 해줌
    // }
));

app.use(helmet());

const today = new Date();
const todayToDayjs = dayjs(today).format("YYYY-MM-DD");
// YYYY-MM-DD 형태로 포맷

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
// hashSync : 동기를 사용하는 함수 => 코드를 순서대로 실행할 수 잇게 함

const token = jsonwebtoken.sign("1234", "secretkey4321"
    // 토큰 만료 기한 => 만든 시점에서 토큰이 무효화됨
);


app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));
// json 으로 700mb 까지 받겠다는 의미. 

// 이렇게 요청과 응답을 할 수 있음.
// app.use((req, res) => {});
// app.메서드("url", (req, res) => {});

let users = [
    {
        id : 1,
        name : "Kim",
        age: 12,
    },
];


// GET Method
// 유저 정보 가져오기
// 요청 => query 혹은 Path로 받음 (body로 받으면 손실될 가능성이 잇음)
// 성공 시 status : 200
app.get("/users", (req, res) => {
    res.status(200).json({ users });
}); 

// POST Method
// 유저 생성
// 요청 => body로 받음
// 성공 시 status : 201
app.post("/users", (req, res) => {
    const {name, age} = req.body;
    console.log("body", req.body);
    users.push({
        id: new Date().getTime(),
        name,
        age,
    });
    res.status(201).json({ users });
});

// PATCH Method
// 유저 수정
// 성공 시 status : 204
// req.params.id
// 요청을 body로 받음
app.patch("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    console.log('param', req.params);
    const targetUserIdx = users.findIndex((user) => user.id === Number(id));

    users[targetUserIdx] = {
        id : users[targetUserIdx].id,
        name : name ?? users[targetUserIdx].name,
        // name 이 없다면 target user의 이름을 사용
        age : age ?? users[targetUserIdx].age,
    };
    res.status(204).json({});
});

// DELETE Method
// 유저 삭제
// 성공 시 status : 204
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    const deletedUsers = users.filter((user) => user.id !== Number(id));
    // 기존에 있던 유저들 중, idx 아이디가 다른 id 만 추출되므로, 
    // 삭제하고 싶은 id 의 유저는 사라지게 됨
    users = deletedUsers;

    res.status(204).json({});
});


// req (request) : 요청 
// res (response) : 응답
app.get("/", (req, res) => {
    res.send("Node.js 강의 좋습니다!");
});

app.listen(8000, () => { // app.listen(실행할 포트, (이후 콜백함수))
    console.log("서버가 시작되었습니다.");
});
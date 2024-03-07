import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dayjs from 'dayjs';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const app = express(); 

// express에서 라이브러리를 사용하는 방법
// app.use()

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
console.log({todayToDayjs});

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
// hashSync : 동기를 사용하는 함수 => 코드를 순서대로 실행할 수 잇게 함
console.log({hashedPassword});

const token = jsonwebtoken.sign("1234", "secretkey4321"
    // 토큰 만료 기한 => 만든 시점에서 토큰이 무효화됨
);

console.log({token});


// req (request) : 요청 
// res (response) : 응답
app.get("/", (req, res) => {
    res.send("Node.js 강의 좋습니다!");
});

app.listen(8000, () => { // app.listen(실행할 포트, (이후 콜백함수))
    console.log("서버가 시작되었습니다.");
});
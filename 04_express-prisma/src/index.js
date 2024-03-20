import express, { Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import UserController from '../routes/user';

const app = express();

// 미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));


// 유저 라우터 등록
app.use("/users", UserController.router);

app.get("/", (req, res) => {
    res.send("Node.js 화이팅");
});

app.use((err, req, res, next) => {
    console.log(err);

    res
    .status(err.status || 500)
    .json({ message :  err.message || "서버에서 에러가 발생했습니다."});

});

app.listen(8000, (req, res) => {
    console.log("서버가 실행됩니다.");
});
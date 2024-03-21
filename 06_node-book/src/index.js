import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import Controllers from "./controllers";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));

app.get("/", (req, res) => {
    res.send(' 6번째 재시도 ㄹㅈㄷ ');
});

Controllers.forEach((controller) => {
    // 각 controller의 path와 router를 등록
    app.use(controller.path, controller.router);
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





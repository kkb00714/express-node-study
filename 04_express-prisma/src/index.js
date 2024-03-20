import express from "express"
import cors from "cors"
import helmet from "helmet"

import Controllers from "./controllers";
import { swaggerDocs, options } from "./swagger";
import swaggerUi from "swagger-ui-express";

const app = express();

// 미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));


// 유저 라우터 등록
// app.use("/users", UserController.router);

Controllers.forEach((controller) => {
    // 각 controller의 path와 router를 등록
    app.use(controller.path, controller.router);
});

app.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerDocs);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, options));


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
import express, { Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import controllers from './controllers';


const app = express();

// 미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));

// const UserRouter = Router();

// // Get /users 
// // 유저 전체를 불러오는 API
// UserRouter.get("/", (req, res) => {
//     res.status(200).json({ users });
// });

// // GET /users/detail/:id
// // 유저 한 명을 불러오는 API
// UserRouter.get("/detail/:id", (req, res) => {
//     const { id } = req.params;
//     // id 를 뽑아오는 방법
    
//     const user = users.find(( user ) => user.id === Number(id));

//     res.status(200).json({ user });
// });

// // POST /users/
// // 유저를 생성하는 API
// UserRouter.post("/", (req, res) => {
//     const { name, age } = req.body;
//     users.push({
//         id: new Date().getTime(),
//         name,
//         age,
//     });

//     res.status(201).json({ users });
// });

// => 모두 Controller 에 집어넣었기 때문에 아래 라우터 설정
// app.use("/users", UserController.router);
// UserController에 라우터가 따로 있기 때문에 .router

// 유저 라우터 등록
// app.use("/users", UserRouter); 
// => 유저 라우터를 분리하기 위해 주석처리


controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
    // 컨트롤러의 라우터를 등록함
});

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
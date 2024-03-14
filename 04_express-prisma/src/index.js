import express, { Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express();

const UserRouter = Router();


// 미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));


// 유저를 저장할 배열 선언
let users = []; 

// 유저 생성
// id 없이 생성했을 때 id 자동생성 기능 추가
UserRouter.post("/create", (req, res) => {
    
    // POST 요청으로부터 데이터 추출
    const { id, name, age, email } = req.body;

    // 요청된 데이터로 새로운 유저 객체를 생성
    const user = { id, name, age, email };

    // 새로운 유저를 배열에 추가
    users.push(user);
    
    // 생성한 유저를 응답으로 돌려줌
    res.status(201).json(user);
    console.log(user.name + " 을(를) 성공적으로 생성했습니다.");
});

UserRouter.get("/", (req, res) => {
    if (users.length === 0) {
        res.status(404).json({message : "생성된 유저가 없습니다"});
        console.log("유저 불러오기에 실패했습니다.");
    } else {
        res.status(200).json({ users : users});
        console.log("전체 유저를 불러옵니다.");
    }
});

UserRouter.get("/detail/:id", (req, res) => {
    const { id } = req.params;
    
    const user = users.find(( user ) => user.id === String(id));

    res.status(200).json({ user });
    console.log(user.name + "을(를) 불러옵니다.");
});

UserRouter.patch("/update/:id", (req, res) => {
    const userId = req.params.id;
    const { age, email } = req.body;

    const user = users.find(user => user.id === userId);
    
    if (!user) {
        return res.status(404).json({message : "해당 ID를 가진 사용자를 찾을 수 없습니다."});
    } 

    if (age) user.age = age;
    if (email) user.email = email;

    res.status(200).json({message : "사용자 정보가 성공적으로 수정되었습니다."});

});

UserRouter.delete("/delete/:id", (req, res) => {
    const userId = req.params.id;

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({message : "해당 유저가 존재하지 않습니다."});
    }

    users.splice(userIndex, 1);

    res.status(200).json({message : "사용자가 성공적으로 삭제되었습니다."});
});

// 유저 라우터 등록
app.use("/users", UserRouter);

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
import { Router } from "express";

// Router
class UserController {

    router;
    path = "/users";

    users = [];

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/", this.getUsers.bind(this));
        // this를 바인드하는 이유?
        // => 각 클래스에서 this 를 사용할 수 있도록 해주기 위함 ☆☆
        this.router.get("/detail/:id", this.getUser.bind(this));
        this.router.post("/create", this.createUser.bind(this));
        this.router.patch("/update/:id", this.updateUser.bind(this));
        this.router.delete("/delete/:id", this.deleteUser.bind(this));
    }

    // 유저 전체 조회
    getUsers(req, res){
        res.status(200).json({ users : this.users});
    }

    // 특정 유저 조회

    getUser(req, res){
        const {id} = req.params;

        const user = this.users.find((user) => user.id === String(id));

        res.status(200).json({ user });
    }

    // 유저 생성
    createUser(req, res){
        const { id, name, email, age } = req.body;

        this.users.push({
            id,
            name,
            age,
            email,
        });

        res.status(201).json({ users : this.users});

    }

    // 유저 수정
    updateUser(req, res){
        const { id }= req.params;
        const { age, email } = req.body;
    
        const user = this.users.find(user => user.id === String(id));
        
        if (!user) {
            return res.status(404).json({message : "해당 ID를 가진 사용자를 찾을 수 없습니다."});
        } 
    
        if (age) user.age = age;
        if (email) user.email = email;
    
        res.status(200).json({message : "사용자 정보가 성공적으로 수정되었습니다."});
    }
    
    // 유저 삭제
    deleteUser(req, res){
        const { id } = req.params;

        const userIndex = this.users.findIndex(user => user.id === String(id));
    
        if (userIndex === -1) {
            return res.status(404).json({message : "해당 유저가 존재하지 않습니다."});
        }
    
        this.users.splice(userIndex, 1);
    
        res.status(200).json({message : "사용자가 성공적으로 삭제되었습니다."});

    }

    
}

const userController = new UserController();
export default userController;

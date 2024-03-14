import { Router } from "express";

// Router
class UserController {

    router;

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

    }

    // 유저 생성
    createUser(req, res){

    }

    // 유저 수정
    updateUser(req, res){

    }
    
    // 유저 삭제
    deleteUser(req, res){

    }

}
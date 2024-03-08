import { Router } from 'express';


// Router 
// 서버에서 기본이 되는 단위는 Controller 이므로,,
class UserController {
    router;
    // 컨트롤러를 사용할 때 컨트롤러의 이점을 이용하기 위해
    // 컨트롤러 내부의 라우터 사용

    path = "/users";
    // 
    
    users = [
        {
            id: 1,
            name: "Leopold",
            age: 12,
        },
    ];

    constructor() {
        this.router = Router();
        this.init();
    }

    init() { // 생성자를 실행할 때 가장 먼저 실행하는 함수
        this.router.get('/', this.getUsers.bind(this)); // 바인드 사용
        this.router.get('/detail/:id', this.getUser.bind(this));
        this.router.post('/', this.createUser.bind(this));
    }

    getUsers(req, res, next) {
        try {
            res.status(200).json({ users: this.users });

        } catch (err) {
            next(err);
        }
    }

    getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = this.users.find((user) => user.id === Number(id));

            if(!user) {
                throw {
                    status: 404,
                    message: "유저를 찾을 수 없습니다"
                };
            }

            res.status(200).json({ user });

        } catch (err) {
            next(err);
        }
    }

    createUser(req, res, next) {
        try {
            const { name, age } = req.body;

            this.users.push({
                id: new Date().getTime(),
                name,
                age,
            });
    
            res.status(201).json({ users: this.users });
        } catch (err) {
            next(err);
        }
    }
}

const userController = new UserController();
export default userController;
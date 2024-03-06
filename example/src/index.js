import { users } from "./user/index.js"; 
// 원래는 ./user/index.js 라고 작성해야 하지만, 
// babel을 통해서 하는 것이므로 생략 가능함
// 확장자, 등등을 전부 명시해야 실행 가능!

console.log("Users: ", users);
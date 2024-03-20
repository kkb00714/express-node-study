import * as Swagger from "../controllers/swagger";
import defaultSwagger from "./defaultSwagger";

console.log(Swagger);

// 1) 가공하는 코드



// 2) 스웨거에 등록할 json 만들기 
//    => defaultSwagger + 1에서 가공하 paths

export const swaggerDocs = {
    ...defaultSwagger,
    // paths 등록
};


// 3) 스웨거에 등록하는 방법
export const options = {
    swaggerOptions: {
        url: "/swagger.json",
    },
};
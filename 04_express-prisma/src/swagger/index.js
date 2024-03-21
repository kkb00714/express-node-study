import * as Swaggers from "../controllers/swagger";
import defaultSwagger from "./defaultSwagger";

console.log(Swaggers);

// 1) 가공하는 코드 (value만 뽑아와tj..)
const { paths } = Object.values(Swaggers).reduce(
    (acc, apis) => {
        const APIs = Object.values(apis).map((api) => {
            return { ...api };
        });

    APIs.forEach((api) => {
        const key = Object.keys(api)[0];
        console.log(key);
        if(!acc.paths[key]) {
            acc.paths = {
                ...acc.paths,
                ...api,
            };
        } else {
            acc.paths[key] = {
                ...acc.paths[key],
                ...api[key],
            };
        }
    });
    console.log(acc);
        return acc;
    }, 
    { paths: {}}
);


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
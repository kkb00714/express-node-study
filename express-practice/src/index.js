import express from 'express';

const app = express(); 



// req (request) : 요청 
// res (response) : 응답
app.get("/", (req, res) => {
    res.send("Node.js 강의 좋습니다!");
});

app.listen(8000, () => { // app.listen(실행할 포트, (이후 콜백함수))
    console.log("서버가 시작되었습니다.");
});
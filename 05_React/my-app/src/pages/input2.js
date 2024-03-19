import React, {useState} from 'react';

const Input2 = () => {
    
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        tel : "",
        age : ""
    });

    const { name, email, tel, age } = inputs;

    const Change = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        
        setInputs({
            // 깊은 복사 => spread 문법 이용
            // 새로운 오브젝트를 생성

            ...inputs, // inputs 에는 데이터들이 전부 들어있는 상태임
            [id]: value,
        });
        // 
    };

    return (
        <div>
            <div>
                <label>이름</label>
                <input type='text' id="name" value={name} onChange={Change}></input>
            </div>

            <div>
                <label>이메일</label>
                <input type='text' id="email" value={email} onChange={Change}></input>
            </div>

            <div>
                <label>전화번호</label>
                <input type='text' id="tel" value={tel} onChange={Change}></input>
            </div>

            <div>
                <label>나이</label>
                <input type='text' id="age" value={age} onChange={Change}></input>
            </div>

            <br />
            <p>이름     : {name}</p>
            <p>이메일   : {email}</p>
            <p>전화번호 : {tel}</p>
            <p>나이     : {age}</p>

        </div>
    );
}

export default Input2;
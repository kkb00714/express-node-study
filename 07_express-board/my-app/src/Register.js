import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [getUsers, setGetUsers] = useState(null); 
    const navigate = useNavigate();

    const fetchData = () => {
      // 등록 후에 사용자 목록 다시 가져오기
        fetch('http://localhost:8000/users/list')
            .then((response) => response.json())
            .then((data) => setGetUsers(data));
    };

    useEffect(() => {fetchData()}, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
    
        fetch('http://localhost:8000/users/register', {
            method: 'POST',
            body: JSON.stringify({
            id,
            password,
            name,
            age,
            email,
            phoneNumber,
        }),

        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => fetchData());
    navigate('/') // 회원가입 후 메인페이지로 이동
};

    return (
        <div className="App">
            <h2>리액트 회원가입 화면</h2>
        
            <form onSubmit={onSubmitHandler}>
                <input name="id"></input>
                <br/>
                <input name="password"></input>
                <br/>
                <input name="name"></input>
                <br/>
                <input name="age"></input>
                <br/>
                <input name="email"></input>
                <br/>
                <input name="phoneNumber"></input>
                <br/>
                <input type="submit" value="유저 등록"></input>
            </form>
        </div>
    );
}

export default Register;
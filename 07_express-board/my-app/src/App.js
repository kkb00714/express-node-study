// import Register from './Register';
import { useEffect, useState } from 'react';

function App() {
  const [getUsers, setGetUsers] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:8000/users/list')
      .then((response) => response.json())
      .then((data) => setGetUsers(data));
  }, []);

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
    .then(() => {
      // 등록 후에 사용자 목록 다시 가져오기
      fetch('http://localhost:8000/users/list')
        .then((response) => response.json())
        .then((data) => setGetUsers(data));
    });
  };

  return (
    <div className="App">

      <h2>리액트 회원가입 / 로그인 화면</h2>
      
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

      {getUsers?.map((user) => (
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.password}</div>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.email}</div>
          <div>{user.phoneNumber}</div>
        </div>
        
      ))}

    </div>
  );
}

export default App;

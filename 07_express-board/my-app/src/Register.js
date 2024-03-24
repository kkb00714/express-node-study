// import React, { Component } from 'react';
// import axios from 'axios';

// class Register extends Component {
//   state = {
//     username: '',
//     password: '',
//     name: '',
//     age: '',
//     email: '',
//     phoneNumber: '',
//     loading: false,
//     error: ''
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({ loading: true, error: '' });

//     const { username, password, name, age, email, phoneNumber } = this.state;
//     const formData = { username, password, name, age, email, phoneNumber };

//     try {
//       const response = await axios.post('/users/register', formData);
//       console.log(response.data);
//       window.location = '/users/list';
//     } catch (error) {
//       console.error('회원가입에 실패했습니다.', error);
//       this.setState({ error: '회원가입에 실패했습니다. 다시 시도해주세요.' });
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { username, password, name, age, email, phoneNumber, loading, error } = this.state;

//     return (
//       <div>
//         <h2>회원가입 페이지</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Username:
//             <input type="text" name="username" value={username} onChange={this.handleChange} />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input type="password" name="password" value={password} onChange={this.handleChange} />
//           </label>
//           <br />
//           <label>
//             Name:
//             <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
//           <br />
//           <label>
//             Age:
//             <input type="number" name="age" value={age} onChange={this.handleChange} />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="email" name="email" value={email} onChange={this.handleChange} />
//           </label>
//           <br />
//           <label>
//             Phone Number:
//             <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
//           </label>
//           <br />
//           {error && <div style={{ color: 'red' }}>{error}</div>}
//           <button type="submit" disabled={loading}>회원가입</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;

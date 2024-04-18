<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="registerUser">
      <label for="id">ID:</label>
      <input type="text" id="id" v-model="user.username" required><br>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required><br>

      <label for="name">이름:</label>
      <input type="text" id="name" v-model="user.name" required><br>

      <label for="age">나이:</label>
      <input type="number" id="age" v-model="user.age" required><br>

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="user.email" required><br>

      <label for="phoneNumber">전화번호:</label>
      <input type="tel" id="phoneNumber" v-model="user.phoneNumber" required><br>
      
      <select id="userType" v-model="user.userType" required>
        <option value="commonUser">일반 사용자</option>
      </select>
      <br>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        id: '',
        password: '',
        name: '',
        age: null,
        email: '',
        phoneNumber: '',
        userType: 'commonUser'
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        await axios.post('/users/register', this.user);
        alert('회원가입 성공');
        // 회원가입 후 홈페이지로 이동하도록 리다이렉션
        this.$router.push('/');
      } catch (error) {
        console.error('회원가입 실패:', error);
        alert('회원가입 실패');
      }
    }
  }
};
</script>
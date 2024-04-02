<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="registerUser">
      <label for="id">ID:</label>
      <input type="text" id="id" v-model="user.username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required>
      <label for="name">이름:</label>
      <input type="text" id="name" v-model="user.name" required>
      <label for="age">나이:</label>
      <input type="number" id="age" v-model="user.age" required>
      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="user.email" required>
      <label for="phoneNumber">전화번호:</label>
      <input type="tel" id="phoneNumber" v-model="user.phoneNumber" required>
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
        phoneNumber: ''
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
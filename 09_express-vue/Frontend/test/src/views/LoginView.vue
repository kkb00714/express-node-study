<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="loginUser">
      <label for="username">사용자 이름:</label>
      <input type="text" id="username" v-model="loginInfo.username" required>
      <label for="password">비밀번호:</label>
      <input type="password" id="password" v-model="loginInfo.password" required>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        await axios.post('/users/login', this.loginInfo);
        alert('로그인 성공');
        localStorage.setItem('isLoggedIn', 'true');
        // 로그인 후 홈페이지로 이동하도록 리다이렉션
        this.$router.push('/mainview');
      } catch (error) {
        console.error('로그인 실패:', error);
        alert('로그인 실패');
      }
    }
  }
};
</script>

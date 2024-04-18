<template>
  <div>
    <h1>크리에이터 회원가입</h1>
    <form @submit.prevent="registerCreator">
      <label for="username">ID:</label>
      <input type="text" id="username" v-model="creator.username" required><br>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="creator.password" required><br>

      <label for="name">이름:</label>
      <input type="text" id="name" v-model="creator.name" required><br>

      <label for="age">나이:</label>
      <input type="number" id="age" v-model="creator.age" required><br>

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="creator.email" required><br>

      <label for="phoneNumber">전화번호:</label>
      <input type="tel" id="phoneNumber" v-model="creator.phoneNumber" required><br>

      <label for="accounts_bank">은행 이름:</label>
      <input type="text" id="accounts_bank" v-model="creator.accounts_bank" required><br>

      <label for="accounts_number">계좌번호:</label>
      <input type="text" id="accounts_number" v-model="creator.accounts_number" required><br>

      <select id="userType" v-model="creator.userType" required>
        <option value="creator">크리에이터</option>
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
      creator: {
        username: '',
        password: '',
        name: '',
        age: '',
        email: '',
        phoneNumber: '',
        accounts_bank: '',
        accounts_number: '',
        userType: 'creator' // userType을 'creator'로 설정하여 크리에이터 회원가입을 위한 폼만 노출
      }
    };
  },
  methods: {
    async registerCreator() {
      try {
        await axios.post('/creators/register', this.creator); 
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

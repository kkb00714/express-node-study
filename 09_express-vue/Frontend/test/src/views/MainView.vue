<template>
  <div class="mainview">
    <div class="header">

      <!-- 로고 -->
      <img src="logo.png" alt="로고">
      
      <!-- 프로젝트 이름 -->
      <a href="/mainview" class="project-name">프로젝트 이름</a>

      <!-- 로그인 / 회원가입 버튼 -->
      <div class="auth-buttons">
        <router-link to="/login">로그인</router-link>
        <router-link to="/register">회원가입</router-link>
      </div>
    </div>
    <div class="content">
      <h2>어서오세요 홈페이지입미당</h2>
      <CategoryGrid :categories="categories" />
      
    </div>

    <div class="informations">
      <h3><router-link to="/notification">[ 필독! ] 공지사항 입니다</router-link> </h3>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.project-name {
  font-size: 24px;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}
</style>
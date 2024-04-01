<template>
  <div class="mainview">
    <div class="header">

      <!-- 로고 -->
      <img src="logo.png" alt="로고">
      
      <!-- 프로젝트 이름 -->
      <a href="/mainview" class="project-name">프로젝트 이름</a>

      <!-- 로그인 / 회원가입 버튼 -->
      <div class="auth-buttons">
        <router-link to="/login">로그인</router-link>  | 
        <router-link to="/RegisterView">회원가입</router-link>
      </div>
    </div>

    <div class="content">
      <h2>어서오세요 홈페이지입미당</h2>

      <div class="informations">
      <h3><router-link to="/notification">[ 필독! ] 공지사항 및 필수 확인 사항입니다.</router-link> </h3>
      <br>
      <img class="mainImage" src="..\images\testmain.jpg" alt="메인 화면 소개 image 입니다.">
      <br>
      <br>
      </div>

      <h3>홈페이지 간단 소개 &amp; 기능 소개</h3>

        <div class="showDetail">
          <p v-html="showFullText ? intro : introShort"></p>
          <p><span @click="toggleFullText" class="read-more">{{ showFullText ? '...간략히 보기' : '...자세히 보기' }}</span></p>
        </div>
      <br>
      <br>

      <div class="searchThis">
        <p>검색 바</p>
      </div>
    
      <div class="currentPopularArtworks">
        <h2 class="popularArtworks">현재 인기 작품</h2>  
        <a href="/popularRanking">인기순 바로가기</a>
      </div>
      
      <div class="currentFreeArtworks">
        <h2 class="freeArtworks">현재 무료 작품</h2>
        <a href="/freeRanking">무료순 바로가기</a>
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      showFullText: false,
      intro: "<br> Select P는 6조의 캡스톤 디자인 프로젝트로, <br>창작물에 대한 공유, 구입 &amp; 판매, <br> 그리고 경매에 대한 기능이 있는 웹 사이트 입니다. <br> 자세히 보기를 원하시면...."
      
    };
  },
  computed: {
    introShort() {
      return this.intro.replace(/<br>/g, " ").slice(0, 25);
    }
  },
  methods: {
    toggleFullText() {
      this.showFullText = !this.showFullText;
    }
  }
};

</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}

.content {
  margin: 0 auto;
  width: 70%;
}

.project-name {
  font-size: 24px;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.mainImage {
  width: 70%;
  display: block;
  margin: 0 auto;
}

.read-more {
  color: blue;
  cursor: pointer;
}

.showDetail p {
  text-align: center;
}

.currentPopularArtworks, .currentFreeArtworks {
  display: flex;
  align-items: center;
}

.popularArtworks, .freeArtworks {
  margin-right: 20px;
}

</style>
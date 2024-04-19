<template>
  <div class="mainview">
    <div class="header d-flex justify-content-between align-items-center bg-light p-3">
      <!-- 로고 -->
      <img src="logo.png" alt="로고" class="logo">

      <!-- 프로젝트 이름 -->
      <a href="/mainview" class="selectP h5 text-dark">프로젝트 이름</a>

      <!-- 로그인 / 회원가입 버튼 -->
      <div v-if="!isLoggedIn" class="auth-buttons">
        <router-link to="/loginview" class="btn btn-primary mr-2">로그인</router-link>
        <router-link to="/registerview" class="btn btn-outline-primary">회원가입</router-link>
      </div>
      <div v-else>
        <router-link to="/loginview" @click="logoutUser" class="btn btn-outline-primary">로그아웃</router-link>
      </div>
    </div>

    <!-- 네비게이션 -->
    <div class="navi container" style="width: 80%;">
      <nav class="nav nav-pills flex-column flex-sm-row justify-content-center">
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">글 / 소설</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">그림</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">일러스트</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">만화</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">무료 공유</a>
      </nav>

      <nav class="nav nav-pills flex-column flex-sm-row justify-content-center" style="margin-top: -50px;">
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">전체 조회</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">인기순</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">웹툰</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">게시판</a>
        <a class="col flex-sm-fill text-sm-center nav-link" href="#">카테고리1</a>
      </nav>
    </div>

    <!-- 메인 컨텐츠 -->
    <div class="content">
      <br>
      <div class="informations">
      <h5><router-link to="/notification"  class="gongji">[ 필독! ] 공지사항 및 필수 확인 사항입니다.</router-link> </h5>
      <br>
      <img class="mainImage" src="..\images\testmain.jpg" alt="메인 화면 소개 image 입니다.">
      <br>
      <br>
      </div>

      <!-- 홈페이지 소개 & 사진 -->
      <h3>홈페이지 간단 소개 &amp; 기능 소개</h3>
      <br>
      <div class="showDetail">
        <p v-html="showFullText ? intro : introShort"></p>
        <p><span @click="toggleFullText" class="read-more">{{ showFullText ? '...간략히 보기' : '...자세히 보기' }}</span></p>
      </div>
      <br>
      <br>

      <!-- 검색 바 -->
      <div class="searchBar">
        <input type="text" id="searchInput" placeholder="검색어를 입력하세요...">
        <span class="searchThis" onclick="search()">🔍</span>
      </div>
      <br>
      <br>

      <!-- 현재 인기 작품 & 바로가기 -->
      <div class="currentPopularArtworks">
        <h2 class="popularArtworks">현재 인기 작품</h2>  
        <a href="/popularartworks">인기순 바로가기</a>
      </div>
      <br>
      <br>

      <br>
      <br>
      <!-- 현재 무료 작품 & 바로가기 -->
      <div class="currentFreeArtworks">
        <h2 class="freeArtworks">현재 무료 작품</h2>
        <a href="/freeartworks">무료순 바로가기</a>
      </div>
      <br>
      <br>

      <br>
      <br>

      <!-- 현재 인기 작가 & 바로가기 -->
      <div class="creators">
        <h2 class="allCreators">인기 작가</h2>
        <a href="/popularartists">작가 모두 보기</a>
      </div>
      <br>
      <div class="ranking">
        <ul class="jakka">
          <li><router-link to="/creator_view/{{ creator.username }}">{{ creator.name }}</router-link></li>
          <li>작가 2</li>
          <li>작가 3</li>
          <li>작가 4</li>
          <li>작가 5</li>
        </ul>
        
        <ul class="jakka">
          <li>작가 6</li>
          <li>작가 7</li>
          <li>작가 8</li>
          <li>작가 9</li>
          <li>작가 10</li>
        </ul>

        <ul class="jakka">
          <li>작가 11</li>
          <li>작가 12</li>
          <li>작가 13</li>
          <li>작가 14</li>
          <li>작가 15</li>
        </ul>

        <ul class="jakka">
          <li>작가 16</li>
          <li>작가 17</li>
          <li>작가 18</li>
          <li>작가 19</li>
          <li>작가 20</li>
        </ul>
      </div>
      <br>
      <br>

      <!-- Footer -->
      <div class="footer">
        <h1>Footer</h1>
      </div>
      <br>
      <br>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showFullText: false,
      intro: "<br> Select P는 6조의 캡스톤 디자인 프로젝트로, <br>창작물에 대한 공유, 구입 &amp; 판매, <br> 그리고 경매에 대한 기능이 있는 웹 사이트 입니다. <br> 자세히 보기를 원하시면....",
      username: '',
      password: '',
      creator: {}
    };
  },

  computed: {
    introShort() {
      return this.intro.replace(/<br>/g, " ").slice(0, 25);
    },
    isLoggedIn() {
      // 로컬 스토리지에서 isLoggedIn 값을 가져옴
      return localStorage.getItem('isLoggedIn') === 'true';
    }
  },

  methods: {
    async loginUser() {
      try {
        // 로그인 요청 보내기
        const response = await axios.post('/users/login', { username: this.username, password: this.password });
        if (response.status === 200) {
          // 로그인 성공 시 isLoggedIn 값을 true로 변경
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          console.error('로그인 실패 : ', response.data.error);
        }
      } catch (error) {
        console.error('로그인 요청 중 에러 발생: ', error);
      }
    },

    async logoutUser() {
      try {
        // 로그아웃 요청 보내기
        const response = await axios.post('/users/logout');
        if (response.status === 200) {
          localStorage.setItem('isLoggedIn', 'false');
        } else {
          console.error('로그아웃 실패 : ', response.data.error);
        }
      } catch (error) {
          console.error('로그아웃 요청 중 에러 발생: ', error);
      }
      
    },

    async getCreatorInfo() {
      try {
        // 작가의 username을 이용하여 작가 정보를 요청
        const username = this.$route.params.username;
        const response = await axios.get(`/creators/${username}`);

        // 요청이 성공하면 작가 정보를 데이터에 저장
        this.creator = response.data;
        this.creator.name = response.data.name;
      } catch (error) {
        console.error('작가 정보를 가져오는 중 에러 발생:', error);
        
      }
    },

    toggleFullText() {
      this.showFullText = !this.showFullText;
    },

    search() {
      // 검색어 가져오기
      var searchKeyword = document.getElementById("serachInput").value;

      // 검색 처리 (ex. 특정 url 로 이동)
      window.location.href = "https://example.com/search?q=" + encodeURIComponent(searchKeyword);
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

.nav-link {
  color: black;
}

.nav-link:hover {
  color: black;
  background-color: rgb(111, 163, 247);
}

.gongji {
  color: black;
  text-decoration: none;
  background-color: rgb(255, 195, 195);
  padding: 8px 12px;
  border-radius: 50px;
  transition: background-color 0.3s;
}

.content {
  margin: 0 auto;
  width: 70%;
}

.selectP {
  text-decoration: none;
  font-size: 30px;
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

.searchBar {
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 10px 40px 10px 20px;
}

.searchThis {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.read-more {
  color: blue;
  cursor: pointer;
}

.showDetail p {
  text-align: center;
}

.currentPopularArtworks, .currentFreeArtworks, .creators {
  display: flex;
  align-items: center;
}

.popularArtworks, .freeArtworks, .allCreators {
  margin-right: 20px;
}

.ranking {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ranking .jakka {
  width: calc(25% - 10px);
  margin-bottom: 20px;
}

</style>
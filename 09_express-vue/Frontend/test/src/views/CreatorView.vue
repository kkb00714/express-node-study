<template>
<div>
    <header>
        <!-- 헤더 내용 -->
    </header>

    <main>
        <!-- 메인 내용 -->
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <!-- 작가 정보 표시 -->
                <div v-if="creator">
                    <h1>{{ creator.name }}</h1>
                    <h1>{{ creator.email }}</h1>
                    <!-- 작가와 관련된 추가 정보 표시 -->
                </div>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a>
                    <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
            <!-- 앨범 카드들 -->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <!-- 카드 내용 -->
                    <div class="col" v-for="index in 7" :key="index">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"/>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                                <div div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>

                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="text-muted py-5">
        <!-- 푸터 내용 -->
    </footer>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            creator: null
        };
    },

    created() {
        // 작가 정보를 가져오는 메소드 호출
        this.getCreatorInfo();
    },

    methods: {
        async getCreatorInfo() {
            try {
                // 작가의 username을 이용하여 작가 정보를 요청
                const username = this.$route.params.username;
                const response = await axios.get(`/creators/${username}`);

                // 요청이 성공하면 작가 정보를 데이터에 저장합니다.
                this.creator = response.data;
            } catch (error) {
                console.error('작가 정보를 가져오는 중 에러 발생:', error);
                // 에러 처리를 원하시면 여기에 작성하세요.
            }
        }
    }
};
</script>


<style>
/* 필요한 CSS 스타일링 */
</style>

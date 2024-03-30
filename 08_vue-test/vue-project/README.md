# vue-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### Vue 참고사항 / 필기

----------------------

    ※ prefetch 삭제한 이유
        => vue 애플리케이션 개발 시 기본적으로 prefetch 기능을 끄는데,

        1) prefetch 기능을 사용하면 (request 요청 수가 증가해) 애플리케이션 첫 화면 접속 시 렌더링이 느려짐, 
            => 비동기 컴포넌트로 정의된 모든 리소스를 캐시에 담기 때문

        2) 따라서 적절한 곳에 적용하는 것이 필요!

        ** 나중에 Lazy Load로 컴포넌트를 사용 가능함
            ex) import (/* webpackPrefetch: true */ '.views/About.vue'); 
            => 주석처리된 부분을 넣어주면 해당 컴포넌트에 대해서는 prefetch를 적용할 수 있음.

    ※ vue sniffet 등록? 

<template></template>
<script>
    export default {
        name: '', // 컴포넌트 이름
        components: {}, // 다른 컴포넌트 사용 시 컴포넌트 import 하고 배열로 저장
        data() { // html & 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {}, // 컴포지션 API
        created() {}, // 컴포넌트가 생성되면 실행
        mounted() {}, // template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {} // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>

=> 나중에 복붙해서 사용할 것

------------------

※ raw(원시) HTML 데이터 바인딩
    => html 태그를 바인딩 할 때에는 문자열을 바인딩할 때 사용한 이중 괄호를 사용하면 안 됨!! 

    v-html 디렉티브 (v-를 접두사로 사용)를 사용
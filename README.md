# express-node-study

졸업 프로젝트를 위한 express - node 정리(공부)

☆ npm 보다 yarn 이 더 빠르다는 점에 yarn 을 사용함 (둘 다 패키지를 관리하는 매니저)

npm install --global yarn : global 을 통해 컴퓨터에 패키지 설치
    <명령어 예시>

    - yarn install 
    - yarn add [package] 
    - yarn add --dev  
    - yarn remove [package] 
    - yarn upgrate 
    - yarn global add [package] 
    - yarn init  (package.json 초기화)

※ package.json 이란?

    npm 혹은 yarn 을 통해 소스코드를 다운받아 사용. (node_modules 라는 다운받아놓은 코드들의 폴더가 생성됨)
    => 이렇게 저장되어 있는 소스코드들을 명시해주는 것이 바로 package.json
    => 이 외 명령들을 미리 저장해놓는 용도로도 사용 가능

※ Transpiling & Babel

    - Transpile (트랜스파일) : 어떤 특정 언어로 작성된 소스 코드를 다른 소스 코드로 변환하는 것
    - Babel : 자바 스크립트 컴파일러로, ES6 -> ES5 로 변환해줌.
    (모든 브라우저에서 동작하도록 호환성을 지켜줌 => 크로스 브라우징 해결)

    - @babel/cli : 바벨을 사용하기 위해 필수
    
    - @babel/core : command line을 통해 코드를 transpile
    
    - @babel/node : ES6로 작성된 노드 코드를 실행
    ( => 성능 저하가 있어 개발 및 테스트 시에만 사용)
    
    - @babel/preset-env : 프리셋을 통해 간단히 바벨 트랜스 파일링 설정

※ "type": "module" 을 package.json 에 추가하면 프로그램을 실행할 수 있음
    (단, 파일의 확장자 명이나 위치 등을 전부 명세한 후에 실행해야 함)


# express 란?

※ Node.js 를 위한 빠르고 개방적인 간결한 웹 프레임워크
    => 빠르게 서버를 생성할 수 있음

※ express를 사용하는 이유!
    - Node.js 기반의 서버 프레임 워크 중, 가장 오래되고 가장 많이 쓰임
    ( => 사용자가 많아 기술이 다양하고 정보도 여러가지가 존재)

    - 다른 프레임워크도 express를 기반으로 했기 때문

    
※ REST API 
    - REST : 서버와 클라이언트가 정보를 주고받는 약속. 
        => 가장 크게는 자원, 행위, 표현 이 세 가지로 분리되어 있음
        
        * 자원 => HTTP URL (서버에 요청을 보내는 주소) 으로 보면 될 것.
            ex) /orders, /posts/:post_id 등등 

        * 행위 => 요청을 하는 방법(HTTP Method)이라고 보면 될 것.
            ex) GET, POST, PATCH, PUT, DELETE
                CRUD - Create, Read, Update, Delete

        * 표현 => 요청과 응답의 형식 (요청과 응답을 어떻게 할 것인가)
            ex) ☆JSON, XML, TEXT 등

    - REST API를 설계하는 규칙
        ☆ 소문자 사용
        ☆ 언더바(_) 대신 하이픈(-) 사용
        ☆ 마지막에 슬래시(/) 포함하지 않음
        ☆ 행위를 포함하지 않음 (users/create, users/update 등)
        ☆ 파일 확장자를 URL에 포함하지 않음
        ☆ 영어는 복수형으로 사용 (장고랑 비슷?)
            => 영어에는 동사가 들어가면 안됨.

    
    - Middleware 구성
        : 요청을 보낼 때 Middleware를 통해서 오게 됨.
    - Middle war 사용 이유 => 공격을 막거나 중간에 필요한 공통적인 기능을 묶어서 한번에 처리하기 위함.
    
    - 어플리케이션 레벨 미들웨어
        : 클라이언트의 모든 요청이 Middleware을 거쳐서 서버로 가는 것 

    - 라우터 레벨 미들웨어
        : 모든 요청에 대해 검사를 하지 않고, 한 요청에 대해서만 검사를 함 
        => 특정 메서드(GET, POST, PATCH 등등)마다 미들웨어를 다르게 적용하는 것 

-------------------------------

# express의 기본 모듈 및 자주 사용되는 라이브러리

※ cors : 접근 가능한 도메인을 제한

※ helmet : Http 헤더 설정을 통해 보안 강화

※ dayjs : 날짜 관련 작업을 할 때 사용

※ nodemon : 수정된 코드에 따라 다시 서버를 실행 (개발 환경에서만 사용됨)

※ axios : 다른 서버에 요청을 보낼 때 사용

<암호 관련>

※ bcrypt : 비밀번호 암호화에 사용 (단방향 암호화)

※ jsonwebtoken : 로그인한 유저 정보를 토큰으로 만들기 위해 사용


----------------------------------

# 간단한 REST API 작성

※ Application Level 미들웨어 작성하기

※ app.use() 사용 방법 (크게 2가지)
    - app.use(helmet()); // 미들웨어를 넣으면 미들웨어로 사용
    - app.use("/users", router); // 라우터로 사용

    => app.use()는 활용하는 방법이 많음!

※ app.get / app.post / app.patch / app.delete
    => GET, POST, PATCH, DELETE / 각각의 요청들을 받을 수 있음.


    ** 라우터 간단 정리 ** 
        - 라우터란? : 클라이언트의 요청에 대한 경로를 정해주는 역할
            ex) 등록해놓은 엔드포인트로 이동

        - 라우터 생성 
        => import { Router } from "express";
        => const router = Router();

        router.get() / router.post() / router.patch() 등을 이용하여 경로와 함수 등록 가능

※ 








-------------------------------

# 프로젝트 시작 / 예시

※ yarn init => 프로젝트 명시, 시작을 위해 package.json 작성

※ yarn add express => express 프레임워크를 위해 설치

※ yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env

※ package.json 에 babel 관련 내용 추가

    "scripts": {
        "test": "node index.js",
        "dev": "babel-node index.js"
    },
    "dependencies": {
        "@babel/cli": "^7.23.9",
        "@babel/node": "^7.23.9",
        "@babel/preset-env": "^7.24.0"
    },
    "babel": {
        "presets": [
        "@babel/preset-env"
        ]
    }
    


※ 루트파일 내에 src 파일을 생성하고 그 안에 index.js 파일 포함, 모든 소스코드를 옮겨 작성함


※ yarn add cors helmet dayjs => 라이브러리 추가

※ yarn add -D nodemon => 개발 환경에서만 사용되는 nodemon 은 -D 로 설치
    => script 부분 실행 명령어 수정
        => nodemon --exec babel-node src/index.js

※ yarn add bcrypt jsonwebtoken => 보안을 위한 간단한 암호화 라이브러리 설치



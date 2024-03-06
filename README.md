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




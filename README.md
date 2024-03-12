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

-------------------------------

# Error Handling

    ※ 에러의 종류를 알고, 그 에러를 적절하게 발생시켜 서버가 다운되지 않도록 해야 함
        => 서버가 돌아가는 데 에러가 발생했다고 서버가 죽어버리지 않도록 핸들링 해주어야 함

    ※ 에러 메시지를 보내는 예시
    
    1. 클라이언트가 요청한 자원(데이터)이 없는 경우
    {
        status: 404,
        message : "유저를 찾을 수 없습니다.
        (적절한 메시지를 제대로 보낼 것)"
    }

    2. 요청이 잘못됐을 경우(Bad Request)
    {
        status: 400,
        message: "잘못된 요청입니다."
    }

    3. 서버 에러가 발생했을 경우
    {
        status: 500, (5 로 시작하는 에러는 대부분 서버 자체의 에러)
        message: "서버 에러입니다."
    }

    ※ Error Middleware
        => try-catch 사용. 
        (try 구문에서 오류 발생 시 코드가 즉시 멈추고 catch 부분의 error 부분에 객체가 넘어오게 됨.)


※ Next란? => 다음으로 가는 의미로, Middleware, Router 단위로 이루어짐.

-------------------------------

# Swagger UI

    ※ Swagger 사용 이유 
        => 각 엔드포인트 별 받아야 할 request에 대해 명시를 할 수 있고, 그에 대한 response 에 대한 것들도 볼 수 있음.

        => 프론트엔드 개발자가 보기에도 편함 


    ※ Swagger 단점 => json 으로 하나하나 적어야 함.




-------------------------------

# DB

    ※ GUI 툴 설치
        - DataGrip (대학생은 무료)
        - Workbench
        - DBeaver


    ※ MySQL 자료형
        
        ex) id : string,
            age : number,
            name : string,
            email : string,
            phoneNumber : string

    
        ◎ 숫자형 (정수형, 고정 소수점, 부동 소수점)
            <정수형> - 범위 !! 그냥 이런 게 있다~ 하고 넘어가기 !!
                ▶ TINYINT => -128 ~ 127 // Unsigned 시 범위 => 0 ~ 255
                    [[ unsigned : 음수에 할당된 공간을 양수로 넘겨줌 (양수로 할당할 수 있는 크기가 2배가 됨) ]]

                ▶ SMALLINT => -32768 ~ 32767 // Unsigned => 0 ~ 65535

                ▶ MEDIUMINT => -8388608 ~ 8388607 // Unsigned => 0 ~ 16777215

                ▶ INT => -2147483648 ~ 2147483647 // Unsigned => 0 ~ 4294967295

                ▶ BIGINT => -9223372036854775808 ~ 9223372036854775807 // Unsigned => 0 ~ 18446744073709551615

            <고정 소수점> : 소수점이 고정되어 있는 것 (소수점 위치가 정해져있지 않음)

                ▶ DECIMAL (길이, 소수점) => 실수의 값을 정확하게 표현하기 위해 사용

                소수 부분의 자릿수를 미리 정해 놓고, 고정된 자릿수로만 소수 부분을 표현하는 방식.
                ex) DECIMAL(5,2) => 5자리까지의 실수이며, 소수점은 2자리까지 표기

            <부동 소수점> 

                ▶ FLOAT (길이, 소수점) => 부동 소수형 데이터 타입(4byte) 

                소수부의 자릿수를 미리 정해 놓고, 고정된 자릿수로만 소수 부분을 표현하는 방식
                ex) FLOAT(5, 2) => 5자리까지의 실수이며, 소수점은 2자리까지 표현

                ▶ DOUBLE (길이, 소수점) => "

                " (8byte)
                ex) DOUBLE(5, 2) => "

                ※ FLOAT & DOUBLE의 차이점
                    - float이 더 작은 범위의 숫자를 저장하고, double이 더 큰 범위의 숫자를 저장
            ※ DECIMAL (vs) FLOAT / DOUBLE
            - 정확한 값 표기 / 오차가 발생하지 않음
                            (vs)
            - 근사한 값 표기 / 오차가 발생할 수 있음

            => 대부분은 속도적인 부분에서 float, double이 빠르기 때문에 float, double 사용 (사바사)

            

        ◎ 문자형 
            ▶ CHAR(n) : 고정 길이를 가지는 문자열을 저장  // 범위 : 0 ~ 255

            ▶ VARCHAR(n) : 가변 길이를 가지는 문자열을 저장하며, 후행 공백을 제거하지 않음 // 범위 : 0 ~ 65535

            ▶ TINYTEXT(n) : 1 ~ 255 개의 가변 길이를 가지는 문자열을 저장 // 범위 : 문자길이 + 1byte

            ▶ TEXT(n) : 1 ~ 65535 개의 " // 범위 : 문자길이 + 2byte

            ▶ MEDIUMTEXT(n) : 1 ~ 16777215 개의 " // 범위 : 문자길이 + 3byte

            ▶ LONGTEXT(n) : 1 ~ 429496729 개의 " // 범위 : 문자길이 + 4byte

            ▶ ENUM : 문자 형태의 value 값을 숫자로 저장
            // 범위 : 255 이하 value는 1byte, 
            //        65335 이하 value는 2byte

            ▶ SET : 비트 연산 열거형,, 미리 정의한 집합 안의 요소 중 여러 개를 동시에 저장할 수 있는 타입
            // 범위 : 최대 64rodml SET 데이터를 포함


            ※ CHAR (vs) VARCHAR (vs) TEXT
            - 고정된 길이로 저장
            - 속도가 빠름
                    (vs)
            - 길이가 변할 수 있음
            - 중간 단계의 속도
                    (vs)
            - 고정된 길이(65535)로 저장
            -느린 속도
                    (vs)

            => 내부적으로 varchar 보다 text보다 더 빠름 (읽는 속도가)
            

        ◎ 날짜와 시간
            ▶ DATE : 날짜 저장 타임
            // 기본 형식 : YYYY-MM-DD
            // ex) '1000-01-01' ~ '9999-12-31'

            ▶ DATETIME : 날짜와 시간 저장 타입
            //YYYY-MM-DD HH:MM:SS
            // ex) '1000-01-01 00:00:00' ~ '9999-12-31 23:59:59'

            ▶ TIMESTAMP : 타임 스탬프 저장 타입
            // ex) '1000-01-01 00:00:00' UTC ~ '9999-12-31 23:59:59' UTC


            ▶ TIME : 시간 저장 타입
            // HH:MM:SS
            // ex) '-838:59:59' ~ '838:59:59'

            ▶ YEAR : 년도 저장 타입
            // YYYY
            // ex) '1901' ~ '2999'

-------------------------------

# CRUD 쿼리

    * 지정해놓은 데이터베이스에 한함!

    쿼리 작성 방법 => 데이터베이스 (lecture) 우클릭 - 새 SQL 편집기

    ※ Create // 삽입하는 쿼리

        INSERT INTO User (id, age, name, email, phoneNumber)
        VALUES (1, 20, 'John', 'john@mail.com', '01012345678');

        // 일부만 넣고 싶을 때
        INSERT INTO User (name, email, phoneNumber)
        VALUES ('John', 'john@mail.com', '01012345678');

    

    ※ Update // 

        UPDATE User
        SET age = 12
        WHERE name = 'John';

        UPDATE User
        SET age = 21
        WHERE id = 'id2';



    ※ Delete //

        DELETE FROM User 
        WHERE id = 'id5';



    ※ Get // 기본

        SELECT *
        FROM User

        SELECT id, age, name
        FROM User
        WHERE id = 'id3'

    ※ GET - count  //  조건에 맞는 수를 세어줌

        SELECT count(*)
        FROM User
        Where phoneNumber = "01012345678"

        => 1

    ※ GET - orderBy  //  특정 조건을 기준으로 오름차순, 내림차순 정렬함.

        SELECT *
        FROM User
        ORDER BY age ASC; or ORDER BY age DESC;
        // ASC => 오름차순 , DESC => 내림차순

        => 나이가 각각 적은 순서 , 많은 순서로 출력됨
    

    ※ GET - 페이징  //  해당하는 양만 데이터를 가져오는 것 ?

        LIMIT : 얼마나 가져올지

        OFFSET : 어디서부터 가져올지

        SELECT *
        FROM User
        ORDER BY age ASC LIMIT 1;

        => 오름차순으로 정렬한 age 의 값을 1 개만 가져오겠다는 의미

        SELECT *
        FROM User
        ORDER BY age DESC
        LIMIT 2 OFFSET 1;

        => 나이를 내림차순으로 먼저 정렬 후
        => 첫번째는 건너뛰고 불러올 것 (OFFSET 1 => 1개를 건너뛰고, LIMIT2 => 2개를 불러올 것)


-------------------------------

# 관계형 쿼리

    ※ PK - Primary Key
        - 데이터를 구분하는 키
        - 중복을 허용하지 않음 (데이터를 구분하기 때문)
        - Null 값을 허용하지 않음
        - 테이블 당 하나만 존재함

        => 각 열, 행마다 다 다른 값으로, 하나씩만 존재해야 함
        => id, age, name 등 전부를 pk로 설정할 수 없음. 무조건 '하나의 테이블' 만 가능


    ※ Unique Key
        - 중복을 허용하지 않음
        - Null 값을 허용함
        - 여러 개 적용 가능

        => pk가 있는데 왜 unique key가 필요할까?
        => '이것' 만큼은 유일하면 좋겠다는 컬럼들이 생길 때 사용

    ※ FK - Foreign Key
        - 다른 테이블의 PK 참조

        => 관계를 표시할 때 상대방 테이블에 있는 아이디를 가져다 쓰는 컬럼
        ex) post 테이블에 존재하는 userId와 같은 개념
            ※ 단, user 테이블에는 userId 값이 존재하지 않음!
            => ERD 에서 설명!









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



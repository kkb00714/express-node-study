let personName = '철수';
personName = '영희';

const age = 15;

// console.log(personName)
// console.log(age)

const amIFool = true;
// typeof amIFool // boolean

const myBrain = null;
// typeof myBrain // object(객체)

const iAmUndefined = undefined;
// typeof iAmUndefined // undefined;

// null, undefined 차이점 
// null 로 할당하는 경우 vs 
// 변수 선언 후 값을 할당하지 않은 경우, 
// 속성 값이 없는 경우(객체). undefined 로 할당하는 경우

const nai = 1;
const minus = -1;
const price = 100_000;
// _ 는 숫자 사이에 자유롭게 넣을 수 있음 (구분하기 위한 용도)

// typeof nai // number
const potential = Infinity;

const quotation = '따옴표';
const doubleQuotation = "쌍따옴표";
const backTick = `역따옴표(백틱)`;
// => 세가지 모두 사용 가능

// 객체 (object)
// => 중괄호를 이용해 생성, key(string | number | symbol) : value (모든 자료형) 쌍으로 구성된 프로퍼티

const user = {
    name: "홀리 몰리 과카몰리",
    age: 12,
    isMale: true,
    "is happy": true,
    "familyName.": "김",
    // 키 값에 스페이스 혹은 .이 표현되어 있을 경우,
    // 따옴표 혹은 쌍따옴표를 이용해 표시
    0: 1,
};

const post = {
    title: "제목",
    content: "내용",
    user, // user: user 와 같음
};

user.name === user['name']
// 객체의 property 를 접근하는 방식

user['0'] // number 키는 문자열으로 변환

// console.log(user.name);
// console.log(user[0].isMale);
// console.log(user["familyName."])

// user = 'hi!' // 에러 (const 사용시 변경이 불가능하므로)
user.isMale = false;
// user 객체의 주솟값은 저장이 되어 있지만, 
// 그 안의 내용들은 저장하고 있지 않음으로, 속성은 변경 가능

delete user.isMale // isMale property 삭제

// console.log('name' in user); // true
// property 의 존재를 확인하는 방법 'property key' in 객체 => 이 방식으로 사용


const minsu = {
    name: '민수',
    age: 20,
};

const yeonghee = {
    name: '영희',
    age: 24,
};

const arr = [1, 'string', false, null, undefined];
const nai2 = [12, 32, 23, 25];
const users = [minsu, yeonghee];

// console.log(arr[0]); // 1
nai2[2] = 100; // [12, 32, 100, 25]

// 함수 : 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록

function pythonez(a, b) {
    // 함수가 호출되었을 때 실행하고자 하는 실행문들
    return a, b; //(반환값) 없어도 무관
}

// 함수를 변수처럼 사용하는 경우 (익명 함수)
const priceGetter = function(a, b) {
    // function 에 함수 이름이 없게 됨
    return (a + b) * 3;
}

priceGetter(1000, 2000) // 9000

// 즉시 실행 함수 => 선언 즉시 실행하는 함수 표현식
// (function () { // 익명함수
//     console.log("hi");
// })();

// Arrow function (화살표 함수)
const anyfunction = (a, b) => {
}

function func(a) {
    return a + 3;
}

const func2 = (a) => {
    console.log('hi');
    return a + 3;
}

const func3 = a => a + 3;
const func4 = () => console.log('hi');

// 실행문이 하나일 경우 중괄호 생략 가능.
// 함수의 인자가 한 개일 경우, 소괄호 생략 가능.
// 하나의 실행문 return 일 경우, return 생략 가능.


// 스코프
// => Function Scope: 전역 스코프 내에 함수가 존재.
//                    전역 스코프 에서는 함수 내의 변수를 참조할 수 없지만
//                    함수에서는 전역 스코프의 변수를 참조할 수 있음.

// Block Scope: 전역 스코프 내에 블록 스코프가 존재. 
//              블록 스코프 안에서 변수를 선언해준 경우
//              전역 스코프 에서는 변수를 참조할 수 없음.
const b = 2;

function test() {
    const a = 1;
}
// console.log(a); // error 

// 제어문
// 어떤 일이 시작되면 상황에 맞게 구분짓거나 반복시켜서 일의 결과 도출

// if (조건식) {}
// else if (조건식) {}
// else {}

const apple = 12_000;

function checkIsExpensive(price) {
    if (price > 10_000) {
        return true;
    }

    else {
        return false; 
    }
}
// console.log(checkIsExpensive(apple));


// switch - case 문

function getFruitPrice(fruit) {
    switch (fruit) {
        case "apple":
            return 50_000;
        case "banana":
            return 10_000;
        case "orange":
            console.log('정보가 없습니다');
            break;
            // break 는 생략 가능하며,
            // '여기서 그만 실행하겠다' 라는 의미
            // break가 없다면 나머지 case 들도 계속 비교 진행
        default:
            // 기본값. 아무 case 에도 맞지 않을 때
            return 0;
    }
}

// console.log(getFruitPrice("apple"));

// for문 
// for (초기화 변수; 조건식; 증감식){
//      실행문..
// }

for (let i = 0; i < 10 ; i++) {
    // console.log('ㅎㅇ', i);
}

// while 문
// => 조건식이 참(true) 인 동안에 실행문을 반복

while (true){
    // console.log('end');
    break;
}

// do-while 문
// => 조건에 상관 없이 최초에 한 번 실행

let cnt = 0

do {
    cnt = cnt - 1
    // console.log('일단 실행');
} while (cnt > 3);


// break continue 
// break => switch 문과 반복문에서 사용

// continue => 반복문에서만 사용 (반복문에서 이 명령을 만나면 반복문의 끝으로 이동)
// 반복문의 종료가 아닌 continue 와 반복문 사이에 있는 실행문이 무시됨

for (let i = 1; i < 5; i++) {
    // console.log('before!', i);
    if (i > 2) {
        continue;
    }
    // console.log('after!', i);
};
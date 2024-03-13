
// Array (배열)
// method (메서드 / 메소드) : 객체 안에 프로퍼티로 정의된 함수

// Object => entries, keys, values

const User_oj = {
    name: 'Kim',
    age: 23,
    address: null,
};

const keys1 = Object.keys(User_oj);
// console.log(keys1);
// 프로퍼티의 key 들을 문자열 배열로 반환
// ex) ['name', 'age', 'address' ...]

const values1 = Object.values(User_oj);
// console.log(values1);
// console.log(`value는 ${values1} 이다!`); // 템플릿 리터럴 방식으로도 사용 가능
// 프로퍼티의 value 들을 배열로 반환 
// ex) ['Kim', '23', 'null' ...]

const entries1 =  Object.entries(User_oj);
// console.log(entries1);
// 프로퍼티의 [key, value] 쌍들을 배열로 반환 (2중 배열)
// ex) [['name', 'Kim'], ['age', '23'], ['address', 'null'] ...]


// Array (원본 배열을 수정하는 메서드) => push, pop, shift, unshift, splice, reverse

// push : 배열의 마지막에 새로운 요소를 추가. 변경된 배열의 길이를 반환
// pop : 배열의 마지막 요소를 제거. 제거한 요소를 반환
// reverse : 배열의 순서를 뒤바꿈. 뒤바뀐 배열을 반환함

const arr1 = [10, 20, 30];

// console.log(arr1.push(40));  // => arr => [10, 20, 30, 40]
// console.log(arr1.pop()); // arr => [10, 20, 30]
// console.log(arr1.reverse()); // arr => [30, 20, 10]

// shift: 배열의 첫 번째 요소를 제거, 제거한 요소를 반환
// unshift : 배열의 첫 번째 자리에 새로운 요소 추가. 변경된 배열의 길이 반환

// console.log(arr1.shift()); // 10 | arr => [20, 30]
// console.log(arr1.unshift()); // 3 | arr => [0, 20, 30]

// splice : 배열 요소를 삭제, 교체, 또는 추가함. 제거된 요소들을 배열로 반환
// => 배열.splice(start[, deleteCount[, item1[1, item2[, ... ]]]])
// start : 배열을 시작하는 index (음수 가능) 
// deleteCount : index 부터 몇 개의 요소를 제거할지 (적지 않으면 start를 포함하여 모두 제거)
// item1, item2, ... : start 위치에 추가할 요소


const arr2 = [1, 2, 3, 4, 5];
// arr2.splice(2); // 인덱스 2부터 끝까지 지워짐
// console.log(arr2); // [1, 2]

// arr2.splice(-2, 1, 10, 20); // 인덱스 0(1), 인덱스 -1(5), 인덱스 -2(4) => 위치해있는 4 를 지우고 10, 20 추가
// console.log(arr2); // [1, 2, 3, 10, 20 , 5]

// arr2.splice(1, 0, 100); // 인덱스 1 위치에서 100이 추가됨 
// console.log(arr2); // [1, 100, 2, 3, 4, 5]

// arr2.splice(1, 1, 100) // 
// console.log(arr2); // [1, 100, 3, 4, 5]


// isArray: 들어온 인자가 Array 인지 판단
// at : index를 인자로 받아 해당 인자에 해당하는 요소를 반환 (주로 at은 마지막 요소를 가져올 때 사용)
// length : 요소들의 개수를 반환

const str = "hi";
const arr = [1, 2, 3, 4, 3, 2];

// console.log(Array.isArray(str));; // false
// console.log(Array.isArray(arr));; // true

// console.log(arr.at(-1)); // 2 (arr[arr.length -1] 와 같음)
// console.log(arr.length); // 6 (배열의 길이를 가져옴)

// includes : 배열이 특정 요소를 포함하고 있는지 확인
// join : 배열이 모든 요소를 연결해 하나의 문자열로 만듦 (인자를 넣지 않을 경우 ",")
// => 

const arr_a = ["안녕", "하세", "요", null, undefined, "?"]

// console.log(arr_a.join()); // 안녕,하세,요,,,?
// console.log(arr_a.join("")); // 안녕하세요?
// console.log(arr_a.includes("하세")); // true


// find(callback) : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 (없을 경우 undefined)
// 배열.find((현재 처리 중인 요소[, 현재 index[, 배열]]) => 찾을 요소의 조건)


// findIndex(callback) : 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스 반환 (없을 경우 -1)
// 콜백함수 : 간단하게 다른 함수에 매개변수로 넘겨준 함수. 
// 매개변수로 넘겨받은 함수는 일단 넘겨받고, 때가 되면 나중에 호출 (called back)
// 배열.findIndex((현재 처리 중인 요소(, 현재 index [, 배열])) => 찾을 요소의 조건)


const ages = [1, 2, 3, 4, 5];
const user = [
    {
        name: "Kim",
        age: 12,
    },
    {
        name: "Lee",
        age: 22,
    },
    {
        name: "Park",
        age: 32,
    },
    {
        name: "Kim",
        age: 42,
    },
];

const kimUser = user.find(function(user){
    return user.name === "Kim";
});
// name 이 Kim 인 것을 찾으면 바로 반환해주고 함수는 종료됨

// const foundKim = user.findIndex((user, index, users) => {
//     console.log(index, users);
//     return user.name === "Kim"
// });


const fourAge = ages.find((age) => age === 4); // 중활호를 지우고, return 없애도 상관 x
const foundIndex = ages.findIndex((age) => age === 4);

// console.log(kimUser);
// console.log(foundKim);
// console.log(fourAge);
// console.log(foundIndex);


// filter(callback) : 조건이 true 인 요소로 이루어진 새로운 배열. 모두 false인 경우 빈 배열 반환
// 배열.filter((현재 처리중인 요소[, 현재 index[, 배열]]) => 찾을 요소의 조건)

// console.log(user.filter((user) => user.age < 20)); // [ { name: 'Kim', age: 12 } ]


// forEach(callback) : 배열 요소 각각에 대해서 callback 실행 (for문과 비슷한 개념) 반환값 없음 (undefined)
// 배열.forEach((현재 처리중인 요소[, 현재 index [, 배열]]) => { 실행문 })

const arr_b = [1, 2, 3, 4]

// arr_b.forEach((item) => {
//     console.log(item);
// }); // 실행문을 다 실행하기 전까지는 그 다음 파라미터로 넘어가지 않음.


// map(callback) : 배열의 모든 요소에 각각 실행문을 호출한 결과를 모아 새로운 배열 반환
// 배열.map((현재 처리중인 요소[, 현재 index [, 배열]]) => { 실행문 })

const twiceArr = arr_b.map((item) => item * 2); // [2, 4, 6, 8]
// console.log(twiceArr);

const evenArr = arr_b.map((item) => {
    if (item % 2 === 0) return item;
}); // [ undefined, 2, undefined, 4 ]
// console.log(evenArr); 
// 1, 3은 홀수이기 때문에 충족하지 않는 값들은 undefined 로 반환됨


// reduce(callback) : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
// 초기 값이 없는 경우 배열의 첫번째 요소를 초기값으로. 빈 배열일 경우 오류 발생
// 배열.reduce((누산기, 현재 처리중인 요소[, 현재 index [, 배열]]) => {실행문, 반환}[, 초기값]]);


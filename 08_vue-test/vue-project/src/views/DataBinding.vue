<template>
    <div>
        <input type="text" v-model="valueModel" />

        <div v-html="htmlString"></div>

        <input type="number" v-model="numberModel" />

        <br>
        <br>
        <input v-model="message" />
        
        <br>
        <br>

        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="031">경기</option>
        </select>

        <br>
        <br>
        <label>췤크 박스 전 입니다<input type="checkbox" v-model="checked">여긴 췤크박스 옆입니다 ㅎ</label>

        <div>
            <label><input type="checkbox" value="서울" v-model="checked">Seoul</label>
            <label><input type="checkbox" value="부산" v-model="checked">Busan</label>
            <label><input type="checkbox" value="경기" v-model="checked">Kyeonggi</label>
        </div>
        <br>
        <span>체크한 지역 : {{ checked }}</span>

        <div>
            <label><input type="radio" v-bind:value="radioValue1" v-model="picked">Seoul</label>
            <label><input type="radio" v-bind:value="radioValue2" v-model="picked">Busan</label>
            <label><input type="radio" v-bind:value="radioValue3" v-model="picked">Kyeonggi</label>
        </div>
        <br>
        <span>선택한 지역2 : {{ picked }}</span>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                valueModel: 'South Korea', // 문자열 데이터 바인딩
                htmlString: '<p style="color:red"> This is a red string.</p', // HTML 데이터 바인딩
                numberModel: 'numberModel: 3', // 나중에 사용자가 입력한 값은 문자가 아니라 숫자로 관리됨
                message: '여러 줄을 입력할 수 있는 textarea 입니당', // textarea
                city: '02', // data에서 정의한 city로 맵핑
                checked: [], // 여러 개의 체크박스를 사용할 때에는 데이터를 바인딩해서 처리 가능
                picked: '', // 하나를 선택했을 때의 데이터 바인딩
                radioValue1: '서울',
                radioValue2: '부산',
                radioValue3: '경기',
            };
        }
    }
</script>
import React, {useState} from 'react';

// +버튼을 누르면 증가, -버튼을 누르면 감소하는 버튼
const Counter = () => {

    const [num, setNumber] = useState(0); 
    // useState => 리액트에서 동적으로 값이 변경되는 것을 관리 (state)
    // setNumber => 앞에 정의한 num 이라는 정수에 대한 set 함수 (num 을 바꿀 수 있는 set 함수)
    
    const increase = () => {
        setNumber(num + 1);

    };

    const decrease = () => {
        setNumber(num - 1);

    };

    const zero = () => {
        setNumber(0);

    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={zero}>set 0</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;
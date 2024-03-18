import React, {useState} from 'react';

// +버튼을 누르면 증가, -버튼을 누르면 감소하는 버튼
const Counter = () => {

    const [num, setNumber] = useState(0); 

    return (
        <div>
            <button>+1</button>
            <button>-1</button>
            <p></p>
        </div>
    )
}
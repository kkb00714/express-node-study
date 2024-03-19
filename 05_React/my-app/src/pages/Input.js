import React, {useState} from 'react';

const WordInput = () => {

    const [textValue, setTextValue] = useState(""); 
    // userState를 통해 값을 가져옴

    const Change = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={Change}></input>
            <br />
            <p>{textValue}</p>
        </div>
    );
}

export default WordInput;
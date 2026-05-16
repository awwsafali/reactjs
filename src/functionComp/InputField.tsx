import React, {useState} from 'react';

function InputField() {
    const [inputName, setInputName] = useState("");

    const handleKeyUp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.currentTarget.value);
    }

    return (
        <div>
            <h2>{inputName}</h2>
            <input type="text" placeholder="Enter your name" onChange={handleKeyUp}/>
        </div>
    );

}

export default InputField;
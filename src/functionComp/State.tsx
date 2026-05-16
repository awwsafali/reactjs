import { useState } from 'react';

function State() {
    const [name, setName] = useState("Ausaf");
    const updateName = () => {
        setName("React State Updated");
    }

    return (
        <div>
            <h2>State Component</h2>
            <p>{name}</p>
            <button onClick={updateName}> State Click </button>
        </div>
    );
}

export default State;
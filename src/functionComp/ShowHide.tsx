import { useState } from 'react';

function ShowHide() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>Show Hide</h2>
            {isVisible ? (
                <h3>HELLWO</h3>
            ) : null}
            <button onClick={toggleVisibility}>Toggle Visibility w/ func</button> <br />
            <button onClick={() => { setIsVisible(!isVisible) }}>Toggle Visibility w/o func</button>
        </div>
    )
}

export default ShowHide;
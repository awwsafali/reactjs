import { Component } from "react";

class ClickComp extends Component {
    render() {
        function handleClick() {
            alert("Button Clicked");
        }
        return (
            <div>
                <h2>Click COmponent</h2>
                <button onClick={handleClick}>Click mE!</button>
            </div>
        );
    }
}

export default ClickComp;
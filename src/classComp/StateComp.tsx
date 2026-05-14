import { Component } from "react";

class StateComp extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Ausaf"
        }
    }

    updateName = () => {
        this.setState({ name: "React State Updated" });
    }

    render() {
        return (
            <div>
                <h2>Class State Component</h2>
                <p>{this.state.name}</p>
                <button onClick={this.updateName}> State Click </button>
            </div>
        );
    }
}

export default StateComp;
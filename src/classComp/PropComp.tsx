import { Component } from "react";

class PropComp extends Component<{ text: string, email: string }> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>text = {this.props.text}</h1>
                <h2>email = {this.props.email}</h2>
            </div>
        );
    }
}

export default PropComp;
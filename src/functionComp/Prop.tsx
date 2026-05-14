function Prop(e: { text: string, email: string }) {
    return (
        <div>
            <h1>text = {e.text}</h1>
            <h2>email = {e.email}</h2>
        </div>
    );
}

export default Prop;
import React from "react"
import ReactDOM, { render } from "react-dom"

type Props = {
    value: string,
}

function ConfirmButton(props:Props) {
    return (
    <button>{props.value}</button>
    );
}

const App = () => {
    return (
        <div>
            <div> hello word1 </div>
            <div>
                <ConfirmButton value="test" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))
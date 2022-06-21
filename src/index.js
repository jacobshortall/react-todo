import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ToDoList(props) {
    return props.items.map((item) => (
        <div className="row justify-content-center mb-3">
            <div className="col-6 p-2 bg-light rounded-1">
                <span className="fs-5">{item}</span>
            </div>
        </div>
    ));
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItems: []
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-3 mt-2">
                    <div className="col-6 text-center">
                        <h1 className="text-light">To-Do</h1>
                    </div>
                </div>

                <ToDoList items={this.state.toDoItems} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);

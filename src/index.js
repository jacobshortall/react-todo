import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ToDoList(props) {
    return props.items.map((item) => (
        <div className="row justify-content-center mb-3">
            <div
                onClick={props.handleClick}
                onAnimationEnd={props.handleAnimationEnd}
                className="col-6 p-2 bg-light rounded-1 td-item"
            >
                <span className="fs-5">{item}</span>
            </div>
        </div>
    ));
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItems: [],
            formValue: ""
        };
    }

    handleClick(e) {
        e.target.classList.add("clicked");
    }

    handleAnimationEnd(e) {
        e.target.classList.remove("clicked");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const toDoItems = this.state.toDoItems.slice();
        toDoItems.unshift(this.state.formValue);
        this.setState({ toDoItems: toDoItems, formValue: "" });
    };

    handleInputChange = (e) => {
        this.setState({ formValue: e.target.value });
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-3 mt-2">
                    <div className="col-6 text-center">
                        <h1 className="text-light fw-bold">To-Do</h1>

                        <form
                            onSubmit={this.handleSubmit}
                            className="d-flex justify-content-center"
                        >
                            <input
                                className="form-control w-75"
                                placeholder="Add item"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.formValue}
                                name="toDoItem"
                            />
                            <button
                                type="submit"
                                className="fs-3 text-success rounded ms-1"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </form>
                    </div>
                </div>

                <ToDoList
                    items={this.state.toDoItems}
                    handleClick={this.handleClick}
                    handleAnimationEnd={this.handleAnimationEnd}
                />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);

import React from "react";
import ReactDOM from "react-dom/client";
import checkLineThrough from "./check_linethrough";
import { Error, displayError } from "./error.js";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ToDoList(props) {
    return props.items.map((item) => (
        <div key={item} className="row justify-content-center mb-3">
            <div
                onClick={props.handleClick}
                onAnimationEnd={props.handleAnimationEnd}
                className="col-10 col-md-8 col-lg-6 p-2 bg-light rounded-1 td-item"
            >
                <span className="fs-5 td-text">{item}</span>
            </div>
        </div>
    ));
}

function ToDoForm(props) {
    return (
        <div>
            <div className="row justify-content-center mb-3 mt-2">
                <div className="col-10 col-md-8 col-lg-6 text-center">
                    <h1 className="text-light fw-bold">To-Do</h1>

                    <form
                        onSubmit={props.handleSubmit}
                        className="d-flex justify-content-center"
                    >
                        <input
                            className="form-control"
                            placeholder="Add item"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.formValue}
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

            <Error />
        </div>
    );
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItems: [],
            formValue: ""
        };
    }

    handleClick = (e) => {
        let element;
        if (e.target.classList.contains("td-text")) {
            element = e.target.parentElement;
        } else {
            element = e.target;
        }
        element.classList.add("clicked");
        checkLineThrough(element);
    };

    handleAnimationEnd = (e) => {
        e.target.classList.remove("clicked");
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const toDoItems = this.state.toDoItems.slice();
        const value = this.state.formValue;

        if (!value.trim()) {
            displayError("Invalid input!");
            return;
        } else if (toDoItems.includes(value)) {
            displayError("Already exists");
            return;
        }

        toDoItems.unshift(value);
        this.setState({ toDoItems: toDoItems, formValue: "" });
    };

    handleInputChange = (e) => {
        this.setState({ formValue: e.target.value });
    };

    render() {
        return (
            <div className="container-fluid">
                <ToDoForm
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    formValue={this.state.formValue}
                />

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

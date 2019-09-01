import React, {Component} from 'react';
import {FormControl, InputGroup} from "react-bootstrap";

class AddTodos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '' //  to store user input todos
        }
    }

    render() {
        const {pEditMode, pTempValue , addTodo , } = this.props;
        //
        return (

            <div>
                <InputGroup className="mb-3 ">
                    <FormControl
                        placeholder="Add todos..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={pTempValue ? pTempValue : this.state.tempValue }
                        // value = "{this.props.tempValue ? this.props.tempValue : this.state.tempValue}"

                        onChange={(event) => this.setState({tempValue: event.target.value})} // set input value into tempValue
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                // console.log( 'temp value', this.state.tempValue)
                                console.log('prps add todos ', this.props);
                                if (pEditMode) {
                                    addTodo(this.state.tempValue)
                                }
                            }

                        }}
                    />

                </InputGroup>
            </div>
        );
    }
}

export default AddTodos;
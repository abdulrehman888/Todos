import React, {Component} from 'react';
import {FormControl, InputGroup, Button, ListGroup} from 'react-bootstrap'

function PrintTodos({oTodos, deleteTodo, editTodo}) {
// console.log('tempValue' , tempValue);


    // const todosList = oTodos.map((value , index) => console.log(value , "index" , index));
    const todosList = oTodos.map((value, index) => {
            return (
                <div className="center">
                    <InputGroup className="mb-3  ">
                        {/*<FormControl*/}
                        {/*    placeholder="Recipient's username"*/}
                        {/*    aria-label="Recipient's username"*/}
                        {/*    aria-describedby="basic-addon2"*/}
                        {/*    // key = {index}*/}
                        {/*    value={value}*/}
                        {/*/>*/}

                        <ListGroup as="ul">
                            <ListGroup.Item as="li" > {value} </ListGroup.Item>

                        </ListGroup>

                            <InputGroup.Append >
                                <Button variant="outline-secondary"
                                        value={index}

                                        onClick={(event) => deleteTodo(event.target.value)}
                                    // onClick={() => console.log(deleteTodo)}
                                >Delete</Button>
                                <Button variant="outline-secondary"
                                        value={index}
                                        onClick={() => editTodo(index)}
                                    // onClick={() => console.log(index)}
                                >Edit</Button>
                            </InputGroup.Append>

                    </InputGroup>
                </div>
            )
        }
    )

    // console.log('input', oTodos);
    return (
        <div className="container">
            {todosList} {/*this will print todos value*/}
        </div>
    )


}

export default PrintTodos;
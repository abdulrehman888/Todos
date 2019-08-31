import React, {Component} from 'react';
import PrintTodo from './PrintTodo'
import { Button, FormControl, InputGroup} from "react-bootstrap";

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos :["abdul", 'rehman' , 'kaim'],
            tempValue  : '',
            editMode: false,
            idTodo: null
        }
    }

    renderTodos = () =>{
        console.log( 'value' , this.state.tempValue);
        const  todos = [...this.state.todos ,  this.state.tempValue];  // this will add new value
        this.setState({
            todos
        })
    }
    deleteTodo = (key) =>{
        const todos = this.state.todos.filter( (value , index) => // this will delete specific value
        {
            if (key != index )
            {
             // console.log(  'key' , key , 'index' , index);
             // console.log(  'key' , typeof(key), 'index' , typeof(index));
            return  value;
            }
        })
        // const  todos = [...this.state.todos , value];  // this will add new value
        this.setState({
            todos
        })
    }


    editTodo  = (index) => {
        // console.log( 'value' , this.state.todos[index]);
    this.setState({
                      editMode: true,
                       tempValue: this.state.todos[index],
                      idTodo: index
                  })
}

    render() {
        return (
            <div>

                <div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add todos..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            // value={tempValue}
                            onChange = { (event)  => this.setState({ tempValue : event.target.value})}
                            // value={pTempValue ? pTempValue : this.state.tempValue }
                            // value = "{this.props.tempValue ? this.props.tempValue : this.state.tempValue}"

                            // onChange={(event) => this.setState({tempValue: event.target.value})} // set input value into tempValue
                            onKeyPress={ (event) => {
                                if (event.key === 'Enter') {
                                    console.log('temp value')
                                      this.renderTodos()
                                }}}
                        />
                        <InputGroup.Append>
                            {/*<Button variant="outline-secondary" onClick={() =>  this.renderTodos} >add</Button>*/}
                            <Button variant="outline-secondary" onClick={() => this.renderTodos() } >add</Button>
                            {/*<Button variant="outline-secondary" onClick={editMode ? this.saveTodo : this.renderTodos}>{editMode ? 'Save' : 'Add'}</Button>*/}
                            {/*{editMode && <Button variant="outline-secondary" onClick={this.cancelEdit}>Cancel</Button>}*/}
                            {/*{editMode && <Button variant="outline-secondary" onClick={this.cancelEdit}>Cancel</Button>}*/}
                        </InputGroup.Append>

                    </InputGroup>
                </div>

               <PrintTodo oTodos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
            </div>
        );
    }
}

export default Todos;
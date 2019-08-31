import React, {Component} from 'react';
import PrintTodo from './PrintTodo'
import  AddTodos from './AddTodos'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos :["abdul", 'rehman' , 'kaim']
        }
    }

    addTodo = (value) =>{
        console.log( 'value' , value);
        const  todos = [...this.state.todos , value];  // this will add new value
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div>
                <AddTodos addTodo={this.addTodo}/>
               <PrintTodo oTodos={this.state.todos} oTodos2={this.state.todos}/>
            </div>
        );
    }
}

export default Todos;
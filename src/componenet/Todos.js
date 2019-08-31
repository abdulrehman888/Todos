import React, {Component} from 'react';
import PrintTodo from './PrintTodo'
import 'bootstrap/dist/css/bootstrap.css';
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos :["abdul", 'rehman' , 'kaim']
        }
    }


    render() {
        return (
            <div>
               <PrintTodo oTodos={this.state.todos} oTodos2={this.state.todos}/>
            </div>
        );
    }
}

export default Todos;
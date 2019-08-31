import React ,  {Component} from 'react';
import  {FormControl , InputGroup  , Button} from 'react-bootstrap'

function PrintTodos( { oTodos }  ) {
    // console.log('input2', oTodos2);
    console.log('input', oTodos);
    // const todosList = arrTodos.map((value) => console.log(value));



        return (
            <div>
               <todosList/>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                    <InputGroup.Append>
                        <Button variant="outline-secondary">but</Button>
                        {/*<Button variant="outline-secondary">but</Button>*/}
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );

}

export default PrintTodos;
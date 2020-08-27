import React, { useState, useReducer } from 'react';
import Hoc from '../hoc';

const reducers = (state, action) => {
      switch(action.type){
            case 'ADD_TODOS':
                  return [...state, renderAction(action.payload.name)];

            case 'TOGGLE_TODOS':
                  return state.map(Todo => {
                      if(Todo.id === action.payload.id) {
                            return {...Todo, complete: !Todo.complete};
                      }
                      return Todo;
                  } );
            case 'DELETE_TODO':
                 return state.filter(todo => todo.id !== action.payload.id);

            default:
                  return state;
      }
};

const renderAction = name => {
      return { id: Date.now(), name, complete:false }
}

export default Hoc(() => {

      const [todos, dispatch] = useReducer(reducers, []);
      const [name, setName] = useState('');

      const onHandleSubmit = e => {
            e.preventDefault();
            dispatch( { type:'ADD_TODOS', payload:{name} } );
            setName('');
            
      }
      console.log(todos);

      const renderTodos = todos.map(todo => {
            return(
                  <div key={todo.id}>
                  <div style={{ color: todo.complete ? 'green' : 'red' }}>{todo.name}</div>
                  <button onClick={ () => dispatch( { type: 'TOGGLE_TODOS', payload: {id: todo.id} } ) }>Toggle</button>
                  <button onClick={ () => dispatch( { type: 'DELETE_TODO', payload: {id: todo.id} } ) }>delete</button>
                 </div>
            );
      })

      return(
            <div>
                  <form onSubmit={onHandleSubmit}>
                        <input type='text' value={name}  onChange={e => setName(e.target.value)}/>            
                  </form>
                  <div>{renderTodos}</div>
            </div>
      );
});
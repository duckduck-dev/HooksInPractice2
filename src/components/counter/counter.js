import React, { useReducer } from 'react';
import Hoc from '../hoc';

const type = {
      INCREMENT: 'increment',
      DECREMENT:'decrement'
};


const reducer = (state, action) => {
      switch(action.type){
            case type.INCREMENT:
                  return { count : state.count+1 };
            case type.DECREMENT:
                  return { count : state.count-1 };
            default:
                  return state;
      }
}


export default Hoc(() => {


      const [state, dispatch] = useReducer(reducer, { count : 0 } );


      return(
            <div>
                  <button onClick={ () => dispatch( { type:type.INCREMENT } ) }>+</button>
                  <button onClick={ () => dispatch( { type:type.DECREMENT } ) }>-</button><br />
                  <div>{state.count}</div>
            </div>
      );
});
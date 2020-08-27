import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Hoc from './hoc';
import Num from './num';

export default Hoc(() => {

      const [number, setNumber] = useState(0);
      const doubleNumber = useMemo( () => slowfunction(number), [number]);
      const [dark, setDark] = useState(false);

      const [num, setNum] = useState(0);

      const showNum = useCallback(() => inc => {
            return [(parseInt(inc)+parseInt(num)), (parseInt(inc)+parseInt(num))+1]
      } , [num]);

      const [blue, setBlue] = useState(false); 

      //customHooks - logs the state whenever the state changes.
      usePrintOnEachRender(number);


      return(
            <div>
                  {/*  useMemo  */}
                  <input type="number" value={ number }  onChange={ e => setNumber(e.target.value) }/><br />
                  <button onClick={ () => setDark(!dark) }>Change Theme</button>
                  <div style={ { background: dark ? '#333339' : 'white', color:dark ? 'white' : '#333339'} } >{doubleNumber}</div>

                 { /*  useCallback */}
                  <input type="number" value={ num }  onChange={ e => setNum(e.target.value) }/><br />
                  <button onClick={ () => setBlue(!blue) }>Change Theme</button>
                  <Num  blue={blue ? true : false} setBlue={setBlue} getItems={showNum} />
            </div>
      );
});

const slowfunction = num => {
      for(var i=0; i<=1000000000; i++) { }
      return num*2;
};


//custom hook
const usePrintOnEachRender = initialValue => {

      useEffect( () => console.log(initialValue), [initialValue] );

}
import React, { useState, useEffect } from 'react';

export default ( { getItems, blue } ) => {

      const [items, setItems] = useState([0,8]);

     

      useEffect( () => {
            console.log('updated');
            setItems(getItems(2))
      } , [getItems]);

      return items.map(item => <div style={ { background: blue ? 'skyblue' : 'yellow', color:blue ? 'yellow' : 'blue'} } key={item}>{item}</div>);
};



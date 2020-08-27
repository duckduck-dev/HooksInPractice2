import React from 'react';

import Hoc from './hoc';


/*class Blog extends React.Component{
      render(){
            return(
                  <div>
                        Welcome to the Blog!.
                  </div>
            );
      }
}*/

const Blog = () => {
      return(
            <div>
                  Welcome to my Blog!
            </div>
      );
}


export default  Hoc(Blog);
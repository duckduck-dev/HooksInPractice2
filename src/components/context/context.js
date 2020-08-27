import React, { useState, createContext } from 'react';


export const MovieContext = createContext();

export const MovieProvider =  props => {

      const [movie, setMovie] = useState([
            {
                  name : 'Inception',
                  rating : 9
            },
            {
                  name : 'Interstellar',
                  rating : 9.5
            },
            {
                  name : 'Dunkrik',
                  rating : 8.9
            }
      ]);
//movie={ [movie, setMovie]
      return(
            <MovieContext.Provider value={[movie, setMovie]} >
                  {props.children}
            </MovieContext.Provider>
      );
};
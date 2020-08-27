import React from 'react';
import Movie from './movie';
import { MovieProvider } from './context';

export default () => {
      return(
            <MovieProvider>
            <div>
               <Movie />
            </div>
            </MovieProvider>
      );
};
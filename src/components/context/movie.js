import React, { useContext, useState, useCallback, useMemo } from 'react';
import { MovieContext } from './context';
import Hoc from '../hoc';

export default Hoc(() => {

      const [movie, setMovie] = useContext(MovieContext);
      const [addMovie, setAddMovie] = useState('');
      const [addRating, setAddRating] = useState('');


      useMemo( () => console.log(`useMemo ${movie}`), [movie]);


      console.log(movie);

      const renderContent = useMemo(() => movie.map(res => {
            return(
                  <div key={res.rating}>
                  {res.name}
                  </div>
            );
      }), [movie]);

      const onHandleSubmit = e => {
            e.preventDefault();
           setMovie( [...movie, {name : addMovie, rating : addRating }] );

      };

      return (
            <div>
            {renderContent}
                  <form onSubmit={onHandleSubmit}>
                  <hr />
                  <h3>Add Movie</h3>
                  <input type="text" value={addMovie} onChange={e => setAddMovie(e.target.value)} placeholder='movie name' /><br />
                  <input type="text" value={addRating} onChange={e => setAddRating(e.target.value)} placeholder='Ratings'/><br />
                  <button type="submit">submit</button>
                  </form>
            </div>
            
      )
});
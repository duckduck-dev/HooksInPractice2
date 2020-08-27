import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Blog from './blog';
import About from './about';
import Header from './Header';
import Counter from './counter/counter';
import Todo from './todo/todo';
import Number from './number';
import Movies from './context/movieList';

const App = () => {

      return(
            <div>
                  <Router>
                  <Header />
                  <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/about' component={About}/>
                        <Route path='/counter' component={Counter} />
                        <Route path='/todo' component={Todo} />
                        <Route path='/number' component={Number} />
                        <Route path='/movies' component={Movies} />
                  </Switch>
                  </Router>
            </div>
      );
};


export default App;

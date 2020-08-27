import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { checkLoginStatus } from '../actions';


const Header =  props => {

      const status = useSelector(stat => stat.userStatus);

      const Dispatch = useDispatch();

      const verify = () =>{
            if(status){                  
                  return <button onClick={ ()=>Dispatch(checkLoginStatus(false)) }>Logout</button>;
            }
            else{
                  return <button onClick={ ()=>Dispatch(checkLoginStatus(true)) } >Login</button>;
            }
            //() =>  props.checkLoginStatus(true)
      }

      return(

            <div style={{ background:'pink'}}>
                        <Link to="/blog" style={{ color: 'red', textDecoration:'none'}}>Blog</Link><br />
                        <Link to="/about" style={{ color: 'blue', textDecoration:'none'}}>About</Link><br />
                        <Link to='/counter' style={{ color: 'green', textDecoration:'none'}}>Counter</Link><br />
                        <Link to='/todo' style={{ color: 'black', textDecoration:'none'}}>Todo</Link><br />
                        <Link to='/number' style={{ color: 'darkblue', textDecoration:'none'}}>Number</Link><br />
                        <Link to='/movies' style={{ color: 'orange', textDecoration:'none'}}>Movies</Link>
                        <li>{verify()}</li>
            </div>
      );
};

export default Header;
//export default connect(null, actions) (Header);
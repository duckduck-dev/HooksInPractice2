import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//class component


/*export default (ChildComponent) => {
      
     class ComposedComponent extends React.Component{
            componentDidMount(){
                  console.log('did');
                  this.pushUser();
                
            }

            componentDidUpdate(){
                  console.log('upd');
                        this.pushUser();
                    
            }

            pushUser(){
                  if(!this.props.status){
                        this.props.history.push('/');
                  }
            }
            render(){
                  return <ChildComponent  {...this.props} />
            }
     }

     function mapStateToProps (state){
           return { status : state.userStatus };
     }
     
     return connect(mapStateToProps) (ComposedComponent);
};*/


//function component


export default ChildComponent => {
      const ComposedComponent = props => {

            const status = useSelector(state => state.userStatus);

            const history = useHistory();

            useEffect( () => {
                  if(!status){
                        history.push('/');
                  }
            } , [status, history]);

            return <ChildComponent  {...props} />;
      };

      return ComposedComponent;
}
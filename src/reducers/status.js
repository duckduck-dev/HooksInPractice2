export default (state=false, action) => {
      switch(action.type){
            case 'CHECK_STATUS':
                  console.log(action.payload);
                  return action.payload;
            default:
                  return state;
      }
};
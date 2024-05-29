
const initialState = {
    data: [],
    loading: false,
  };
const productReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'i':
              return {
            ...state,
            data:action.payload
        };
      default:
        return state;
    }
    
  };
  
  export default productReducer;
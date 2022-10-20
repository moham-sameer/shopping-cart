  import * as types from '../Actions/action-types'
  const initialState = {
    carts:[]
  };

  export const cartReducer = (state=initialState,action)=>{
    switch(action.type){
      case types.ADD_TO_CART:
        const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);
        if(itemIndex  >= 0){
          state.carts[itemIndex].qnty +=1;
            return{
              ...state, carts:[...state.carts]
            }
        } else{
          const temp = {...action.payload,qnty:1};
           return {
            ...state,
             carts: [...state.carts, temp]
           } 
        }
        
      case types.REMOVE_FROM_CART:
         const data = state.carts.filter((el)=>el.id !== action.payload)
        return{
          ...state,
          carts:data             
        }
        
        case types.RMV_ONE:
          const itemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
          if(state.carts[itemIndex_dec].qnty >=1){
            const dltItem = state.carts[itemIndex_dec].qnty -= 1;
            console.log([...state.carts,dltItem])
            return{
              ...state,
              carts:[...state.carts]
            }
          } else if(state.carts[itemIndex_dec].qnty === 0){
            const value = state.carts.filter((el)=>el.id !== action.payload)
                  return{
                      ...state, carts: value
                  }
          }
        break;
      default:
        return state;        
     }
    }
import { useEffect } from "react";

const InitialState = {
  Items:[],
  Item:[]
  };
  


function Reducer(state = InitialState, action) {

    switch (action.type) { 
      case "ALL_ITEMS":
        return {
            ...state,
            Items: action.payload
        };
        case 'DETAIL': 
        return {
         ...state,
         Item: state.Items.find((el) => el.author_id === action.payload)
        };
      default:
        return state;
    }
  }
  
  export default Reducer;

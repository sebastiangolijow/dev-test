const Initialstate = {
    tickets:[],
   };
   
   function Reducer(state = Initialstate, action) {
     switch (action.type) {
       case "GET_TICKETS":
         return {
          ...state,
          tickets: action.payload.data[0].tickets
         };
       case "":
         return { 
 
         };
 
       default:
         return state;
     }
   }
   
   export default Reducer;
   
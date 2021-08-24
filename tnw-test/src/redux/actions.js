export function getTickets() {
    return  (dispatch) =>  {
       return fetch("https://next.tnw-staging.com/next-api/tickets.json")
         .then((response) => response.json())
         .then((json) => {
           dispatch({ type: "GET_TICKETS", payload: json });
         })
  }
}
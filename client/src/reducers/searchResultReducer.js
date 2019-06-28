export default function searchResultReducer(state = { query: '' }, action ) {
  //console.log(action);
   switch (action.type) {
     case 'ADD_SEARCH_RESULTS':
     //console.log('Current state.items length %s', state.searchResults.length);
    //console.log('Updating state.items length to %s', state.searchResults.length + 1);
    console.log(action)
    return Object.assign({}, state, {
       searchResults: action.results
     });

     case 'UPDATE_SEARCH_FORM':
     return {
       ...state,
       query: action
     }

     case 'PERFORM_SEARCH':
     console.log(action)
     return {
       ...state,
       searchResults: action
     }

     default:
     //console.log('Initial state.items length: %s', state.searchResults.length);
     return state;
   }

}

export default function searchResultReducer(state = { searchResults: [] }, action ) {
  //console.log(action);
   switch (action.type) {
     case 'ADD_SEARCH_RESULTS':
     //console.log('Current state.items length %s', state.searchResults.length);
    //console.log('Updating state.items length to %s', state.searchResults.length + 1);
    console.log(action)
    return Object.assign({}, state, {
       searchResults: action.results
     });


     default:
     //console.log('Initial state.items length: %s', state.searchResults.length);
     return state;
   }

}

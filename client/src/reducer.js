import { combineReducers } from 'redux';



const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";

const UPDATE_MOST_POPULAR = "UPDATE_MOST_POPULAR";



const initialState = {
  searchText: '',
  searchResults: [],
  mostPopular: '',
};

const searchTextReducer = (state = initialState.searchText, action) => {
  if(action.type === UPDATE_SEARCH_TEXT) {
    return action.value
  }
  return state;
};

const searchResultsReducer = (state = initialState.searchResults, action) => {
  if(action.type === UPDATE_SEARCH_RESULTS) {
    return action.value
  }
  return state;
};



const mostPopularReducer = (state = initialState.mostPopular, action) => {
  if(action.type === UPDATE_MOST_POPULAR) {
    return action.value
  }
  return state;
};


const rootReducer = combineReducers({
  searchText: searchTextReducer,
  searchResults: searchResultsReducer,
  mostPopular: mostPopularReducer
});

export default rootReducer;

import { combineReducers } from 'redux';


const results = [
      { rank: 1,
        url: "https://www.ripoffreport.com/report/ali-shah/newport-coast-ca-crook-1480866",
        sentiment: 'negative'
      },
      { rank: 2,
        url: "https://www.ripoffreport.com/report/stuart-romanoff-darryl-double/ny-failed-pay-professional-1480424",
        sentiment: 'negative'
      },
      { rank: 3,
        url: "https://www.instagram.com/jamessmithvocal/?hl=en",
        sentiment: 'positive'
      },
      { rank: 4,
        url: "https://www.youtube.com/watch?v=iOWboQMmnis",
        sentiment: 'positive'
      },
      { rank: 5,
        url: "https://www.forbes.com/sites/rahathuq/2018/09/06/with-trade-of-ryan-anderson-rockets-keep-their-options-available/#3f474c277714",
        sentiment: 'neutral'
      }
    ]


const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";

const UPDATE_MOST_POPULAR = "UPDATE_MOST_POPULAR";

const initialState = {
  searchText: '',
  searchResults: results,
  mostPopular: ''
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

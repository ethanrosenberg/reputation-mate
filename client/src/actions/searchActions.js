
export const performSearch = query => {
  return {
    type: "PERFORM_SEARCH",
    query
  };
}

export const updateSearchText = event => {
  return {
    type: "UPDATE_SEARCH_TEXT",
    value: event.target.value
  };
};

export const updateSearchResults = value => {
  return {
    type: "UPDATE_SEARCH_RESULTS",
    value
  };
};



export const updateCurrentUrl = value => {
  return {
    type: "UPDATE_CURRENT_URL",
    value
  };
};



export const search = input => {

  return dispatch => {

    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: input })
    }

    fetch('http://localhost:3000/api/v1/search', headers)
      .then(r => r.json())
      .then(response => {
          dispatch(updateSearchResults(response.results))

      })
  }
}

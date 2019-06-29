export const updateMostPopular = value => {
  return {
    type: "UPDATE_MOST_POPULAR",
    value
  };
};


export const getMostPopular = () => {

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

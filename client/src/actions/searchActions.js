export const addSearchResults = results => {
  return {
    type: "ADD_SEARCH_RESULTS",
    results
  };
};

export const updateSearchForm = formData => {
  return {
    type: "UPDATE_SEARCH_FORM",
    formData
  };
};

export const performSearch = query => {
  return {
    type: "PERFORM_SEARCH",
    query
  };
}

export const updateSearchText = value => {
  return {
    type: "UPDATE_SEARCH_TEXT",
    value
  };
};

export const updateSearchResults = value => {

  return {
    type: "UPDATE_SEARCH_RESULTS",
    value
  };
};

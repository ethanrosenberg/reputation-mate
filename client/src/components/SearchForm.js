import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchActions'
import { performSearch } from '../actions/searchActions'


class SearchForm extends React.Component {



  render() {

    const handleSearchBarChange = event => {
      //this.props.updateQuery()

     const { name, value } = event.target

    const updatedSearchFormData = {
        [name]: value
      };

      //this.props.dispatch({
     // type: "UPDATE_SEARCH_FORM",
       // query: value
      //});

     updateSearchForm(updatedSearchFormData);
   };


    return (
      <div class="col-md-6 col-md-offset-3">
      <div class="row">
      <form role="form" id="form-buscar">
      <div class="form-group">
      <div class="input-group">
      <input id="1" class="form-control" onChange={this.handleSearchBarChange} type="text" name="query" placeholder="Search..."  required/>
      <span class="input-group-btn">
      <button class="btn btn-success" type="submit">
      <i class="glyphicon glyphicon-search" aria-hidden="true"></i> Search
      </button>
      </span>
      </div>
      </div>
      </form>
      </div>
      </div>

    );
  }

}



const mapStateToProps = state => {
  return {
    query: state.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchForm: () => {
      dispatch(updateSearchForm())
    }
  };
};



//const mapDispatchToProps = dispatch => {}


export default connect(mapStateToProps)(SearchForm)

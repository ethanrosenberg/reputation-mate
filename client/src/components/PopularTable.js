import React from 'react';
import PopularItem from '../components/PopularItem'

class PopularTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mostPopular: []
    };
  }

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/mostpopular')
      .then(r => r.json())
      .then(response =>{

        this.setState({
          mostPopular: response
        })

      })

  }

render () {




  return (
    <div class="col-md-8 col-md-offset-2">
    <div class="row">
    <br></br>
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Property</th>
        <th scope="col">Occurences</th>
        <th scope="col">Sentiment</th>
      </tr>
    </thead>
    <tbody>
    {
    this.state.mostPopular.map((result, index) => (

      <PopularItem key={index} index={index} url={result.root_url} occurrences={result.occurrences} sentiment={result.sentiment} />
    ))
    }


    </tbody>
  </table>
  </div>
  </div>
  )
}


}

const mapStateToProps = state => {
  return {
    popularProperties: state.mostPopular
  };
}

export default PopularTable

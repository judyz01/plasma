import React from 'react';
import axios from 'axios';

class getRequest extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          totalReactPackages: null
      };
  }

  componentDidMount() {
      // GET request using axios
      axios.get('https://api.radar.io/v1/search/places', {
                params: {categories: 'blood-bank'},
                headers: {'Authentication': 'prj_test_pk_aae3f64055893c6ba68ce9bbfa398390a57c724f'}
                }
      )
      .then(response => console.log(response.data))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
  }

  render() {
      const { totalReactPackages } = this.state;
      return (
          <div className="card">
              <h5 className="card-header">Nearest donation centers:</h5>
              <img src="plasmamap.png" alt="Plasma Map"></img>
              <div className="card-body">
                  {totalReactPackages}
              </div>
          </div>
      );
  }
}

export default getRequest
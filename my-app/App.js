import React from 'react';
import Info from './src/components/info';
import Form from './src/components/form';
import Status from './src/components/status';

const APi_KEY = "38f582f40emshfbd6ab81c5ff0eap120f45jsn174edcc972ac"

class App extends Component {

  state = {
    confirmed: undefined,
    location: undefined,
    error: undefined
  }
  gettingStatus = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const api_url =  await
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total");
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
        <div>
          <Info />
          <Form StatusMethod={this.gettingStatus} />
          <Status />
        </div>   
      );
  }  
}

export default App;
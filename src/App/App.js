import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeAGoat = (goatId) => {
    goatData.freeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <h1>GOAT YOGA LTD</h1>
        <GoatCorral goats={goats} useAGoat={this.useAGoat} freeAGoat={this.freeAGoat}/>
      </div>
    );
  }
}

export default App;

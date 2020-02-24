import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Components/PlayerList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    players: [],
    search:""
  };
  }

  handleChanges = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };


componentDidMount(){
  axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({players: response.data})
    })
}

render(){
  return (
    <div className="App">
     <PlayerList players={this.state.players}/>
    </div>
  )};
}

export default App;

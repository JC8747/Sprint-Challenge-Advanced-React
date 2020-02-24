import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import PlayerList from './Components/PlayerList';
import useLocalStorage from './hooks/useLocalStorage';
import useDarkMode from './hooks/UseDarkMode';

class App extends React.Component {

  state = {
    players: []
  }

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

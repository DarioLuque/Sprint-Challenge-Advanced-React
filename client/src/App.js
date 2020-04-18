import React from 'react';
import axios from 'axios';

import PlayerCard from './components/PlayerCard';
import Header  from './components/Header';

import styled from 'styled-components';
import './App.css'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [],
    };
  }

  componentDidMount(){
    // player data
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data, "player res.data")
      this.setState({player: res.data});
    })
  }

  render() {
    return(
      <Container>
        <Header />
        {this.state.player.map((players, index) => {
          return <PlayerCard key={index} player={players} />
        })}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`;

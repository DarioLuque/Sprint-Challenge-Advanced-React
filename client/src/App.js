import React from 'react';
import axios from 'axios';

import PlayerData from './components/PlayerCard';
import PlayerCard from './components/PlayerCard';

import styled from 'styled-components';



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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

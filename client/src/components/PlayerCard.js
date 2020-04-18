import React from 'react';
import styled from 'styled-components';

class PlayerCard extends React.Component {

  render() {

    return(
      <div>
        <h1>{this.props.player.name} </h1>
        
      </div>
    );
  }
}

export default PlayerCard; 

const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

`;
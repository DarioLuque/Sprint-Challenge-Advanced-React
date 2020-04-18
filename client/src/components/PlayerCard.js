import React from 'react';
import styled from 'styled-components';

class PlayerCard extends React.Component {

  render() {

    return(
      <Card>
        <CardHeader>
        <h3>{this.props.player.name} </h3>
        <img src={window.location.origin + '/images/Soccer-Shoe-PNG-Photo.png'} alt="field" />
        </CardHeader>
        <CardInfo>
        <InfoBg>
        <h4>Country: {this.props.player.country} </h4>
        <h4>Searchers: {this.props.player.searches} </h4>
        <h6>ID: {this.props.player.id} </h6>
        </InfoBg>
        <ImgCon>
        <img src={window.location.origin + '/images/Soccer-Football-PNG.png'} alt="soccerball"/>
        </ImgCon>
        </CardInfo>
      </Card>
    );
  }
}

export default PlayerCard; 

//styles

const Card = styled.div`
  background-image: url(https://images.unsplash.com/photo-1582583642747-45910b2147aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  margin: 3%;
  width: 25%;
  box-shadow: 10px 10px 10px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const CardHeader = styled.div`
  background: linear-gradient(black 2%, white 55%);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  font-family: 'Anton', sans-serif;

  img {
    width: 25%;
  }
`;

const CardInfo = styled.div`
  width: 90%;
  font-family: 'Anton', sans-serif;
  
  h4 {
    font-size: 1.3rem;
    padding: 2%;

  }

  h6 {
    font-size: 1.2rem;
    padding: 2%;
  }

  img {
    width: 25%;
  }
`;

const InfoBg = styled.div`
  width: 100%;
  background: rgba(255,255,255, 0.3)
`;

const ImgCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

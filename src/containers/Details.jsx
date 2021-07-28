import React, { Component } from 'react';
import { fetchCharacterById } from '../services/animalCrossingApi';

export default class Details extends Component {
state = {
  character: [],
  loading: false
}

async componentDidMount() {
  const theCharacter = this.props;
    
  try {
    const character = await fetchCharacterById(theCharacter.match.params.id);
    this.setState({ character });
  } catch(err) {
    console.log(err);
  }
}

render() {
  const { character } = this.state;


  return (
    <figure>
      <img src={character.image} alt={character.name}/>
      <figcaption>
        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
        <p>Skill: {character.skill}</p>
        <p>"{character.quote}"</p>
      </figcaption>
    </figure>
  );
}
}

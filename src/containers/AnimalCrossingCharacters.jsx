import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/animalCrossingApi';

export default class AnimalCrossingCharacters extends Component {
    state = {
      characters: [],
      loading: true,
    };

    async componentDidMount() {
      const characters = await fetchCharacters();
      this.setState({ characters, loading: false });
    }

    render() {
      const { characters, loading } = this.state;

      if(loading) return <h1>Gathering bells...</h1>;

      return <CharacterList characters={characters} />;
    }
}

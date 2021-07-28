import React from 'react';
import PropTypes from 'prop-types';
import Character from './Characters';


const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        {...character}
        //the spread will do name={character.name} etc etc
      />

    </li>
  ));

  return <ul>{characterElements}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      skills: PropTypes.string,
      quote: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;

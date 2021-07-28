import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, skill, quote, image }) => (
  <figure>
    <img src={image} alt={name}/>
    <figcaption>
      <p>Name:{name}</p>
      <p>Species:{species}</p>
      <p>Skill:{skill}</p>
      <p>"{quote}"</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;

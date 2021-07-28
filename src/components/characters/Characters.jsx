import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, species, skill, quote, image }) => (
  <figure>
    <Link to={_id}> <img src={image} alt={name}/></Link>
    <figcaption>
      <p>Name: {name}</p>
      <p>Species: {species}</p>
      <p>Skill: {skill}</p>
      <p>"{quote}"</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  skill: PropTypes.string,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;

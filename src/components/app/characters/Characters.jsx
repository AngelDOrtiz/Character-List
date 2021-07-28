import React from 'react';
import ProptTypes from 'prop-types';

const Character = {{ name, species, skill, quote, image }} => (
    <figure>
        <img src={image} alt={name}/>
        <figcaption>
            <p>name</p>
            <p>species</p>
            <p>skill</p>
            <p>quote</p>
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
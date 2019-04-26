import React from 'react';
import './StarWars.scss';

const StarWars = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            <p>
                <strong>Birth Year:</strong> {props.character.birth_year}
            </p>
            <p>
                <strong>Gender:</strong> {props.character.gender}
            </p>
            <p>
                <strong>Height:</strong> {props.character.height}cm
            </p>
        </div>
    );
}

export default StarWars;
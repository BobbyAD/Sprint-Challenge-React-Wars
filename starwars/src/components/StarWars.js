import React from 'react';

const StarWars = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            <p>
                <strong>Birth Year:</strong> {props.character.birth_year}
            </p>
            <p>
                <strong>Eye Color:</strong> {props.character.eye_color}
            </p>
        </div>
    );
}

export default StarWars;
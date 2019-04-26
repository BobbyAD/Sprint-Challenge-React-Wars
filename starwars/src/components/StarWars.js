import React from 'react';
import './StarWars.scss';

class StarWars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: props.character,
            homeworld: '',
            species: '',
        };
    }

    getHomeworld = URL => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ homeworld: data.name });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    getSpecies = URL => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ species: data.name });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    componentDidMount() {
        this.getHomeworld(this.state.character.homeworld);
        this.getSpecies(this.state.character.species);
    }

    render() {
        return (
            <div className="character-card">
                <h3>{this.state.character.name}</h3>
                <p>
                    <strong>Birth Year:</strong> {this.state.character.birth_year}
                </p>
                <p>
                    <strong>Gender:</strong> {this.state.character.gender}
                </p>
                <p>
                    <strong>Height:</strong> {this.state.character.height}cm
                </p>
                <p>
                    <strong>Homeworld:</strong> {this.state.homeworld}
                </p>
                <p>
                    <strong>Species:</strong> {this.state.species}
                </p>
            </div>
        );
    }
}

export default StarWars;
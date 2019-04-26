import React, { Component } from "react";
import "./App.scss";
import StarWars from "./components/StarWars";
import StarWarsButtons from "./components/StarWarsButtons";

class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: [],
            peopleData: "https://swapi.co/api/people/",
            previous: "",
            next: ""
        };
    }

    componentDidMount() {
        this.getCharacters(this.state.peopleData);
    }

    getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ 
                    starwarsChars: data.results, 
                    previous: data.previous, 
                    next: data.next 
                });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    nextPage = event => {
        event.preventDefault();
        if (this.state.next) {
            this.getCharacters(this.state.next);
        }
    }

    prevPage = event => {
        event.preventDefault();
        if (this.state.previous) {
            this.getCharacters(this.state.previous)
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className="Header">React Wars</h1>
                <div className="character-list">
                    {this.state.starwarsChars.map(element => (
                        <StarWars character={element} key={element.created} />
                    ))}
                </div>
                <StarWarsButtons 
                    prev={this.prevPage} 
                    next={this.nextPage} 
                />

            </div>
        );
    }
}

export default App;

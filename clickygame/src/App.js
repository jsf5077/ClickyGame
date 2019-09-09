import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import pokemon from "./pokemon.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      pokeSelected: [],
      pokemon
    };
  }
  // Setting this.state.pokemon to the pokemon json array
  // state = {
  //   pokemon
  // };

  shuffle = id => {
    this.setState({
      pokemon: this.state.pokemon.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  pokePic= id => {

    console.log (id + " caught!")
    let selected = this.state.pokeSelected;
    for ( let i = 0; i < selected.length; i++) {
      if(id !== selected[i]) {
        selected.push(id);
      console.log(id + " inserted into array");
      console.log("poke Array: " + selected);
      } else {
        console.log("uh oh! This pokemon has already been caught!");
        this.setState({selected: []});
        console.log("poke Array: " + selected)

      }
    }

  }

  render() {
    return (
      <Container>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <div className="justify-content-center row">
          <div className="col-8">
            <div className="row justify-content-center">
              {this.state.pokemon.map(pokemon => (
                <Card
                  id={pokemon.id}
                  key={pokemon.id}
                  image={pokemon.image}
                  name={pokemon.name}
                  shuffle={this.shuffle}
                  pokePic={this.pokePic}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;

import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import pokemon from "./pokemon.json";

class App extends React.Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon
  };

  shuffle = id => {
    this.setState({
      pokemon: this.state.pokemon.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  render() {
    return (
      <Container>
        <Navbar />
        <div className="justify-content-center row">
          <div className="col-8">
            <div className="row justify-content-center">
              {this.state.pokemon.map(pokemon => (
              <Card id={pokemon.id} key={pokemon.id} image={pokemon.image} shuffle={this.shuffle}/>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}



export default App;

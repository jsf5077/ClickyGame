import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import pokemon from "./pokemon.json";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

let checker = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      pokeSelected: [],
      pokemon,
      show: false
    };
  }

  shuffle = id => {
    this.setState({
      pokemon: this.state.pokemon.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  pokePic = id => {
    console.log(id + " caught!");
    let selected = this.state.pokeSelected;
    if (selected.includes(id)) {
      console.log("uh oh! This pokemon has already been caught!");
      Swal.fire({
        title: 'uh oh!',
        text: 'This pokemon has already been caught!',
        type: 'error',
        confirmButtonText: 'Cool'
      })
      checker = 0;
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        });
      }
      this.setState({
        score: 0,
        selected: []
      });
    } else {
      selected.push(id);
      console.log(selected);
      this.setState({
        score: this.state.score + 1
      });
      checker ++;
      if (checker === 12) {
        console.log("Yay! You won! congrats!");
        Swal.fire({
          title: 'Congratulations!',
          text: 'You caught them all',
          type: 'success',
          confirmButtonText: 'Cool'
        })
        if (this.state.score > this.state.topScore) {
          this.setState({
            topScore: this.state.score
          });
        }
        this.setState({
          score: 0,
          selected: [],
          topScore: 12
        });
        checker = 0;
      }
    }
  };

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

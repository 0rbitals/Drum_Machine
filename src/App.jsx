/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentlyPlaying: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick(event) {
    this.setState({
      currentlyPlaying: event.target.id,
    });
    event.target.lastChild.play();
  }

  handleKeyPress(event) {
    switch (event.key) {
      case 'q':
      case 'Q':
        document.getElementById('Q').lastChild.play();
        this.setState({
          currentlyPlaying: 'Q',
        });
        break;
      case 'w':
      case 'W':
        document.getElementById('W').lastChild.play();
        this.setState({
          currentlyPlaying: 'W',
        });
        break;
      case 'e':
      case 'E':
        document.getElementById('E').lastChild.play();
        this.setState({
          currentlyPlaying: 'E',
        });
        break;
      case 'a':
      case 'A':
        document.getElementById('A').lastChild.play();
        this.setState({
          currentlyPlaying: 'A',
        });
        break;
      case 's':
      case 'S':
        document.getElementById('S').lastChild.play();
        this.setState({
          currentlyPlaying: 'S',
        });
        break;
      case 'd':
      case 'D':
        document.getElementById('D').lastChild.play();
        this.setState({
          currentlyPlaying: 'D',
        });
        break;
      case 'z':
      case 'Z':
        document.getElementById('Z').lastChild.play();
        this.setState({
          currentlyPlaying: 'Z',
        });
        break;
      case 'x':
      case 'X':
        document.getElementById('X').lastChild.play();
        this.setState({
          currentlyPlaying: 'X',
        });
        break;
      case 'c':
      case 'C':
        document.getElementById('C').lastChild.play();
        this.setState({
          currentlyPlaying: 'C',
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { currentlyPlaying } = this.state;
    return (
      <div id="drum-machine">
        <div id="display">
          {currentlyPlaying}
        </div>
        <button type="submit" className="drum-pad" id="Q" onClick={this.handleClick}>
        Q
          <audio src="https://freesound.org/people/InspectorJ/sounds/410514/download/410514__inspectorj__snare-drum-single-hit-a-h1.wav" className="clip" id="Q" />
        </button>
        <button type="submit" className="drum-pad" id="W" onClick={this.handleClick}>
        W
          <audio src="https://freesound.org/people/bigjoedrummer/sounds/111654/download/111654__bigjoedrummer__snare-premier-artist-maple-loose-hit-x3.wav" className="clip" id="W" />
        </button>
        <button type="submit" className="drum-pad" id="E" onClick={this.handleClick}>
        E
          <audio src="https://freesound.org/people/-zin-/sounds/34828/download/34828__zin__hi-snare-1.wav" className="clip" id="E" />
        </button>
        <button type="submit" className="drum-pad" id="A" onClick={this.handleClick}>
        A
          <audio src="https://freesound.org/people/Keygenerator/sounds/105244/download/105244__keygenerator__dubstep-beat-140.mp3" className="clip" id="A" />
        </button>
        <button type="submit" className="drum-pad" id="S" onClick={this.handleClick}>
        S
          <audio src="https://freesound.org/people/shainexedubstep/sounds/223098/download/223098__shainexedubstep__dubstep-snare.wav" className="clip" id="S" />
        </button>
        <button type="submit" className="drum-pad" id="D" onClick={this.handleClick}>
        D
          <audio src="https://freesound.org/people/jmayoff/sounds/256954/download/256954__jmayoff__drum-loop.wav" className="clip" id="D" />
        </button>
        <button type="submit" className="drum-pad" id="Z" onClick={this.handleClick}>
        Z
          <audio src="https://freesound.org/people/Terry93D/sounds/369394/download/369394__terry93d__timpani-c2.wav" className="clip" id="Z" />
        </button>
        <button type="submit" className="drum-pad" id="X" onClick={this.handleClick}>
        X
          <audio src="https://freesound.org/people/hello_flowers/sounds/30822/download/30822__hello-flowers__tomtom6-tribalfloor.wav  " className="clip" id="X" />
        </button>
        <button type="submit" className="drum-pad" id="C" onClick={this.handleClick}>
        C
          <audio src="https://freesound.org/people/-zin-/sounds/34821/download/34821__zin__crash-3-hit-1.wav" className="clip" id="C" />
        </button>
      </div>
    );
  }
}

export default App;

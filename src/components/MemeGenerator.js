import React, { Component, Fragment } from 'react'
import Meme from './Meme'
import MemeOptions from './MemeOptions'

class MemeGenerator extends Component {
  state = {
    textTop: 'please',
    textBottom: 'go on',
    textSizeTop: 10,
    textSizeBottom: 10,
    url: 'https://vignette.wikia.nocookie.net/meme/images/5/58/Willy_Wonka.jpg/revision/latest/top-crop/width/360/height/450?cb=20170214023325&path-prefix=pt-br'
  }

  componentDidMount () {}

  changeSizeTextTop = (event, newValue) => {
    this.setState({ textSizeTop: newValue });
  }

  changeSizeTextBottom = (event, newValue) => {
    this.setState({ textSizeBottom: newValue });
  }

  changeTextTop = (text) => {
    const newState = { textTop: text };
    this.setState(newState);
  }

  changeTextBottom = (text) => {
    const newState = { textBottom: text };
    this.setState(newState);
  }

  changeImage = (link) => {
    const newState = { url: link };
    this.setState(newState);
  }

  render () {
    return (
      <div className="box">
        <Meme 
          url={ this.state.url }
          textTop={ this.state.textBottom }
          textBottom={ this.state.textTop }
          textSizeTop={ this.state.textSizeTop }
          textSizeBottom={ this.state.textSizeBottom }
        />
        <MemeOptions 
          changeTextTop={ this.changeTextTop }
          changeTextBottom={ this.changeTextBottom }
          changeImage={ this.changeImage }
          changeSizeTextTop={ this.changeSizeTextTop }
          changeSizeTextBottom={ this.changeSizeTextBottom }
          textSizeTop={ this.state.textSizeTop }
          textSizeBottom={ this.state.textSizeBottom }
        />
      </div>
    );
  }
}

export default MemeGenerator;

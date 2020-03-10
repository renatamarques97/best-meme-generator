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

  componentDidMount () {
    
  }

  changeTextTop = (text) => {
    let { textTop } = Object.assign(this.state);
    const newState = { textTop: text };
    this.setState(newState);
  }

  changeTextBottom = (text) => {
    let { textBottom } = Object.assign(this.state);
    const newState = { textBottom: text };
    this.setState(newState);
  }

  render () {
    return (
      <div className="box">
        <Meme 
          url={ this.state.url }
          textTop={ this.state.textBottom }
          textBottom={ this.state.textTop }
        />
        <MemeOptions 
          changeTextTop={ this.changeTextTop }
          changeTextBottom={ this.changeTextBottom }
        />
      </div>
    );
  }
}

export default MemeGenerator;

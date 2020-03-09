import React, { Component, Fragment } from 'react'
import Meme from './Meme'
import MemeOptions from './MemeOptions'

class MemeGenerator extends Component {
  state = {

  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div className="box">
        <Meme />
        <MemeOptions />
      </div>
    );
  }
}

export default MemeGenerator;

import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MemeOptions extends Component {
  render () { 
    return (
      <div>
        <h3><i class="fa fa-picture-o fa-fw" aria-hidden="true"></i>Source Image</h3>
        <p>From URL</p>
        <input id="imgURL" class="block" type="text" placeholder="Link to image" />
        <p>From Local Disk</p>
        <input id="imgFile" type="file" accept="image/*"/>
        <label for="imgFile" class="btn"><i class="fa fa-upload fa-fw"></i></label>
        <input id="textTop" class="block" type="text" placeholder="Top Text" 
          onChange={ (e) => this.props.changeTextTop(e.target.value) }
        />
        <input id="textBottom" class="block" type="text" placeholder="Bottom Text" 
          onChange={ (e) => this.props.changeTextBottom(e.target.value) }
        />
      </div>
    );
  }
}

export default MemeOptions;

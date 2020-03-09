import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MemeOptions extends Component {
  render () { 
    return (
      <div>
        <h3><i class="fa fa-picture-o fa-fw" aria-hidden="true"></i>Source Image</h3>
        <h3><FontAwesomeIcon icon="coffee"/></h3>
        <p>From URL</p>
        <input id="imgURL" class="block" type="text" placeholder="Link to image" />
        <p>From Local Disk</p>
        <input id="imgFile" type="file" accept="image/*"/>
        <label for="imgFile" class="btn"><i class="fa fa-upload fa-fw"></i></label>
        <TextField id="filled-basic" label="Link to Image" variant="filled" />
        <TextField id="filled-basic" label="Top Text" variant="filled" />
        <TextField id="filled-basic" label="Bottom Text" variant="filled" />
      </div>
    );
  }
}

export default MemeOptions;

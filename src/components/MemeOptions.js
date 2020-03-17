import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from '@material-ui/core/Slider';

class MemeOptions extends Component {
  

  render () { 
    return (
      <div>
        <h3><i class="fa fa-picture-o fa-fw" aria-hidden="true"></i>Source Image</h3>
        <p>From URL</p>
        <input id="imgURL" class="block" type="text" placeholder="Link to image" 
          onChange={ (e) => this.changeImageExternal(e) }
        />
        <a href="https://memeful.com/" target="_blank">memeful.com</a>
        <p>From Local Disk</p>
        <input id="imgFile" type="file" accept="image/*"
          onChange={ (e) => this.changeImageFromLocalDisk(e) }
        />
        <label for="imgFile" class="btn local-disk"><i class="fa fa-upload fa-fw"></i></label>
        <label class=""><i class=""></i><p>Meme Text</p></label>
        <input id="textTop" class="block" type="text" placeholder="Top Text" 
          onChange={ (e) => this.props.changeTextTop(e.target.value) }
        />
        <input id="textBottom" class="block" type="text" placeholder="Bottom Text" 
          onChange={ (e) => this.props.changeTextBottom(e.target.value) }
        />
        <label class=""><i class="fa fa-upload fa-fw"></i><p>Text Size</p></label>
        <label><a>Text Size Top</a></label>
        <Slider value={ this.props.textSizeTop } 
                onChange={ this.props.changeSizeTextTop } 
                aria-labelledby="continuous-slider" 
                valueLabelDisplay="auto" 
                max={ 30 } min={ 2 }
                />
        <label><a>Text Size Bottom</a></label>
        <Slider value={ this.props.textSizeBottom } 
                onChange={ this.props.changeSizeTextBottom } 
                aria-labelledby="continuous-slider" 
                valueLabelDisplay="auto"
                max={ 30 } min={ 2 }
                />
      </div>
    );
  }
}

export default MemeOptions;

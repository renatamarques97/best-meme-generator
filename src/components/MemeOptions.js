import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import { FaDownload, FaUpload, FaFont } from 'react-icons/fa';
import { AiOutlinePicture, AiOutlineFontSize } from 'react-icons/ai';

class MemeOptions extends Component {
  changeImageExternal = (e) => {
    const url = e.target.value;
    this.props.changeImage(url);
  }

  changeImageFromLocalDisk = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    this.props.changeImage(url);
  }

  render () {
    return (
      <div>
        <p><AiOutlinePicture /> From URL</p>
        <input id="imgURL" class="block" type="text" placeholder="Link to image"
          onChange={ (e) => this.changeImageExternal(e) }
        />
        <a href="https://memeful.com/" target="_blank" rel="noopener noreferrer">memeful.com</a>
        <p>From Local Disk</p>
        <input id="imgFile" type="file" accept="image/*"
          onChange={ (e) => this.changeImageFromLocalDisk(e) }
        />
        <label for="imgFile" class="btn local-disk"><FaUpload /></label>
        <label><p><FaFont /> Meme Text</p></label>
        <input id="textTop" class="block" type="text" placeholder="Top Text"
          onChange={ (e) => this.props.changeTextTop(e.target.value) }
        />
        <input id="textBottom" class="block" type="text" placeholder="Bottom Text"
          onChange={ (e) => this.props.changeTextBottom(e.target.value) }
        />
        <label><p><AiOutlineFontSize /> Text Size</p></label>
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
        <p>Export</p>
        <label class="btn local-disk"><FaDownload /></label>
        <p>* If the button doesn't work, right-click the image and save it</p>
      </div>
    );
  }
}

export default MemeOptions;

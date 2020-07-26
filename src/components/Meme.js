import React, { Component } from 'react'

class Meme extends Component {
  componentDidMount() {
    const img = this.refs.image

    img.onload = () => {
      this.draw();
    }
  }

  componentDidUpdate() {
    this.draw();
  }

  draw = () => {
    const top = this.props.textTop.toUpperCase();
    const bottom = this.props.textBottom.toUpperCase();
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const textSizeTop = this.props.textSizeTop;
    const textSizeBottom = this.props.textSizeBottom;
    const totalPercentage = 100;

    canvas.width = 500;
    canvas.height = 600;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = canvas.width*0.004;

    const _textSizeTop = textSizeTop/totalPercentage*canvas.width;
    const _textSizeBottom = textSizeBottom/totalPercentage*canvas.width;

    ctx.font = _textSizeTop + 'px ' + 'Impact';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(bottom.replace(/((\s*\S+)*)\s*/, '$1'), canvas.width/2, canvas.height - 530 );

    ctx.font = _textSizeBottom + 'px ' + 'Impact';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    ctx.fillText(top.replace(/((\s*\S+)*)\s*/, '$1'), canvas.width/2, canvas.height - 70 );
  }
  render() {
    return(
      <div>
        <canvas ref="canvas" />
        <img ref="image" src={ this.props.url } className="hidden" />
      </div>
    )
  }
}

export default Meme;

import React, { Component } from 'react'

class Meme extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Courier"
      ctx.fillText("PLEASE", 210, 75)
    }
  }
  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src="https://vignette.wikia.nocookie.net/meme/images/5/58/Willy_Wonka.jpg/revision/latest/top-crop/width/360/height/450?cb=20170214023325&path-prefix=pt-br" className="hidden" />
      </div>
    )
  }
}

export default Meme;

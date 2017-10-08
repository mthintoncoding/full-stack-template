import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render () {
    return <div className='videoContainer'><ReactPlayer width='600px' height='600px' url='https://www.youtube.com/watch?v=4u0-JGXaGq4&t=52s' playing controls /></div>
  }
}

export default Video

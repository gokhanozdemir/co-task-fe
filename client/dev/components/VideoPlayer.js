
import React from 'react';
// import '../node_modules/ReactHtml5Video.css';
// import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import serverClient from '../utils/Helpers.js';
import Video from 'react-html5video';
import 'react-html5video/dist/ReactHtml5Video.css';


class VideoPlayer extends React.Component {
  render() {
    let vidMergedUrl = `${serverClient}${this.props.url}`;
    console.log(vidMergedUrl);
    return (
      <Video
        controls
        // autoPlay
        // poster="https://unsplash.it/800/600"
      >
        <source src={vidMergedUrl} type="video/mp4" />
      </Video>
        );
    }
}

// VideoPlayer.propTypes = {
//   rating: React.PropTypes.number.isRequired,
// }

export default VideoPlayer;

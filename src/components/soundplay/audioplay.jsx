import React from 'react';
import Cursormove from '../../sound/cursormove.mp3'

const AudioPlayer = function() {
  return (
    <audio src={Cursormove} autoplay/>
  );
}
export default AudioPlayer;
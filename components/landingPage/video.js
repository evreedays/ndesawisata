import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styled from "@emotion/styled";

export default class Video extends React.Component {
  render() {
    const opts = {
      height: "620",
      width: "1280",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        rel: 0,
        iv_load_policy: 3,
        loop: 1,
      },
    };

    return (
      <VideoWrapper>
        <YouTube videoId="BQMgowDk16Q" opts={opts} onReady={this._onReady} />
      </VideoWrapper>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.setLoop(true);
  }
}

const VideoWrapper = styled.div`
  margin: 20rem 0 10rem 0;
  pointer-events: none;
`;

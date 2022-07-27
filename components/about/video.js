import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export default class Video extends React.Component {
  render() {
    return (
      <VideoContainer>
        <VideoWrapper>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
            className="youtube-player"
            playing
            width="560px"
            height="315px"
            controls={false}
          />
        </VideoWrapper>
      </VideoContainer>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.setLoop(true);
  }
}

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 8rem 0 5rem 0;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 21rem;
  width: 74rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const VideoWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: auto;
    .youtube-player {
      width: 400px;
    }
  }
`;

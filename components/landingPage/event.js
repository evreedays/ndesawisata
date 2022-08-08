import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Event = () => {
  return (
    <EventContainer>
      <Title>
        <p className="title">Event</p>
      </Title>
      <VideoWrapper>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=79S-ZJoXRsU"
          className="youtube-player"
          playing={false}
          width="560px"
          height="315px"
          controls={false}
        />
      </VideoWrapper>
    </EventContainer>
  );
};
const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 8rem 0 5rem 0;
`;
const Title = styled.div`
  margin-bottom: 3rem;
  .title {
    font-size: 1.15rem;
    font-weight: 600;
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

export default Event;

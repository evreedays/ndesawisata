import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export default class SejarahPengelolaan extends React.Component {
  render() {
    return (
      <VideoContainer>
        <ContentContainer>
          <DescriptionWrapper>
            <h3>Sejarah Pengelolaan</h3>
            <p className="description">
              Nglanggeran, located 25 km away from Yogyakarta city, has
              developed the concept of Community-based tourism. The majority of
              the population work as farmers, plantation workers and ranchers.
              The beauty of its natural landscape and the uniqueness of Gunung
              Api Purba (ancient volcano) are the main attraction in
              Nglanggeran. This attraction is also a part of the UNESCO Global
              Geopark of Mount Sewu.{" "}
            </p>
          </DescriptionWrapper>
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/w4ljl4CzpJY"
              className="youtube-player"
              playing
              width="560px"
              height="315px"
              controls={false}
            />
          </VideoWrapper>
        </ContentContainer>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  height: auto;
  margin: 3rem 0 5rem 0;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 21rem;
  width: 74rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    height: auto;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-right: 4rem;
  .description {
    padding-top: 0.5rem;
    color: #555555;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    align-items: center;
    text-align: center;
  }
`;
const VideoWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: auto;
    margin-top: 3rem;
    .youtube-player {
      width: 400px;
    }
  }
`;

import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export default class Video extends React.Component {
  render() {
    return (
      <VideoContainer>
        <ContentContainer>
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/pkOi9gXlSZQ"
              className="youtube-player"
              playing
              width="560px"
              height="315px"
              controls={false}
            />
          </VideoWrapper>
          <DescriptionWrapper>
            <h3 className="title">desa wisata nglanggeran</h3>
            <p className="description">
              Nglanggeran, Kecamatan Patuk, Kabupaten Gunung Kidul, Daerah
              Istimewa Yogyakarta,
            </p>
          </DescriptionWrapper>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 8rem 0 5rem 0;
  @media screen and (max-width: 768px) {
    margin: 5rem 0 5rem 0;
  }
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
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-left: 5rem;
  .title {
    text-transform: capitalize;
    font-size: 2.5rem;
  }
  .description {
    color: #555555;
    font-size: 1.15rem;
    padding-top: 0.5rem;
  }
  /* web views */
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    align-items: center;
    text-align: center;
    padding: 0 0.5rem;
    margin-bottom: 4rem;
    .title {
      font-size: 1.5rem;
    }
    .description {
      font-size: 0.9rem;
      font-weight: 300;
      padding-top: 0.5rem;
    }
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

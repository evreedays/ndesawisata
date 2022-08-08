import styled from "@emotion/styled";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Link from "next/link";
//Component
import TourismBadge from "/components//landingPage/tourismBadge";
import GAP from "/public/assets/embung-sunrise.jpg";
import InforamationSection from "/components/landingPage/informationSection";
const Index = () => {
  return (
    <DestinationContainer>
      <DestinationWrapper>
        <Hero>
          <Title>
            <h3 className="title">Destinasi Wisata di Nglanggeran</h3>
            <p className="sub-title">
              Eksplore semua destinasi wisata yang ada di Nglanggeran
            </p>
          </Title>
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/pkOi9gXlSZQ"
              className="youtube-player"
              playing
              width="1120px"
              height="630px"
              controls={false}
            />
          </VideoWrapper>
          <BadgeWrapper>
            <p className="title">Pilihan Wisata</p>

            {/* Tourism Destination Badge */}
            <TourismBadge />
          </BadgeWrapper>
        </Hero>
        <MainDestination>
          <Title className="title">
            Destinasi Utama Desa Wisata Nglanggeran
          </Title>

          {/* Card Destinasi Wisata */}
          <CardContainer>
            <ContentWrapper>
              <ImageWrapper>
                <Image src={GAP} alt="thumbnail" width={490} height={330} />
              </ImageWrapper>
              <Description>
                <h3 className="card-title">Gunung Api Purba</h3>
                <p className="card-headline">
                  Nglanggeran Ancient Volcano was an active volcano around 30-60
                  milion years ago. It is located at Nglanggeran village, Patuk
                  district, Gunungkidul regency.It stand in Batuagung area in
                  northen part of Gunungkidul, with an altitude between 200-700
                  above the sea level.
                </p>
                <Link href="">
                  <a>
                    <DetailButton>
                      Detail
                      <svg
                        width="36"
                        height="37"
                        viewBox="0 0 36 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.99994 18.5C8.99994 18.2016 9.11847 17.9155 9.32944 17.7045C9.54042 17.4935 9.82657 17.375 10.1249 17.375L23.1592 17.375L18.3284 12.5465C18.2238 12.4419 18.1409 12.3177 18.0843 12.1811C18.0277 12.0444 17.9985 11.8979 17.9985 11.75C17.9985 11.6021 18.0277 11.4556 18.0843 11.3189C18.1409 11.1823 18.2238 11.0581 18.3284 10.9535C18.433 10.8489 18.5572 10.7659 18.6939 10.7093C18.8305 10.6527 18.977 10.6236 19.1249 10.6236C19.2729 10.6236 19.4193 10.6527 19.556 10.7093C19.6927 10.7659 19.8168 10.8489 19.9214 10.9535L26.6714 17.7035C26.7762 17.808 26.8593 17.9321 26.916 18.0688C26.9728 18.2055 27.002 18.352 27.002 18.5C27.002 18.648 26.9728 18.7945 26.916 18.9312C26.8593 19.0678 26.7762 19.192 26.6714 19.2965L19.9214 26.0465C19.7102 26.2577 19.4237 26.3764 19.1249 26.3764C18.8262 26.3764 18.5397 26.2577 18.3284 26.0465C18.1172 25.8353 17.9985 25.5487 17.9985 25.25C17.9985 24.9513 18.1172 24.6647 18.3284 24.4535L23.1592 19.625L10.1249 19.625C9.82657 19.625 9.54042 19.5065 9.32944 19.2955C9.11846 19.0845 8.99994 18.7984 8.99994 18.5Z"
                          fill="#444444"
                        />
                      </svg>
                    </DetailButton>
                  </a>
                </Link>
              </Description>
            </ContentWrapper>
            <ContentWrapper>
              <ImageWrapper>
                <Image src={GAP} alt="thumbnail" width={490} height={330} />
              </ImageWrapper>
              <Description>
                <h3 className="card-title">Gunung Api Purba</h3>
                <p className="card-headline">
                  Nglanggran Orchard Reservoir (Embung) at Ecotourism Site of
                  Nglanggeran Ancient Volano is 0.43 hectare in breadth, used to
                  irriagte durian and longan trees in the orchard which spans
                  for 20 hectare. This orchrd is located 1.5 kilometers in
                  southeast side of ancient volcano entrance gate.
                </p>
                <Link href="">
                  <a>
                    <DetailButton>
                      Detail
                      <svg
                        width="36"
                        height="37"
                        viewBox="0 0 36 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.99994 18.5C8.99994 18.2016 9.11847 17.9155 9.32944 17.7045C9.54042 17.4935 9.82657 17.375 10.1249 17.375L23.1592 17.375L18.3284 12.5465C18.2238 12.4419 18.1409 12.3177 18.0843 12.1811C18.0277 12.0444 17.9985 11.8979 17.9985 11.75C17.9985 11.6021 18.0277 11.4556 18.0843 11.3189C18.1409 11.1823 18.2238 11.0581 18.3284 10.9535C18.433 10.8489 18.5572 10.7659 18.6939 10.7093C18.8305 10.6527 18.977 10.6236 19.1249 10.6236C19.2729 10.6236 19.4193 10.6527 19.556 10.7093C19.6927 10.7659 19.8168 10.8489 19.9214 10.9535L26.6714 17.7035C26.7762 17.808 26.8593 17.9321 26.916 18.0688C26.9728 18.2055 27.002 18.352 27.002 18.5C27.002 18.648 26.9728 18.7945 26.916 18.9312C26.8593 19.0678 26.7762 19.192 26.6714 19.2965L19.9214 26.0465C19.7102 26.2577 19.4237 26.3764 19.1249 26.3764C18.8262 26.3764 18.5397 26.2577 18.3284 26.0465C18.1172 25.8353 17.9985 25.5487 17.9985 25.25C17.9985 24.9513 18.1172 24.6647 18.3284 24.4535L23.1592 19.625L10.1249 19.625C9.82657 19.625 9.54042 19.5065 9.32944 19.2955C9.11846 19.0845 8.99994 18.7984 8.99994 18.5Z"
                          fill="#444444"
                        />
                      </svg>
                    </DetailButton>
                  </a>
                </Link>
              </Description>
            </ContentWrapper>
            <ContentWrapper>
              <ImageWrapper>
                <Image src={GAP} alt="thumbnail" width={490} height={330} />
              </ImageWrapper>
              <Description>
                <h3 className="card-title">Gunung Api Purba</h3>
                <p className="card-headline">
                  Njurug Talang Purba ais located in the southernp art of
                  Nglanggeran Ancient Volvano, along with green lush of local
                  people’s rice field terracing. The waterfall eund through the
                  volcanic rock steps in the rainy season.
                </p>
                <Link href="">
                  <a>
                    <DetailButton>
                      Detail
                      <svg
                        width="36"
                        height="37"
                        viewBox="0 0 36 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.99994 18.5C8.99994 18.2016 9.11847 17.9155 9.32944 17.7045C9.54042 17.4935 9.82657 17.375 10.1249 17.375L23.1592 17.375L18.3284 12.5465C18.2238 12.4419 18.1409 12.3177 18.0843 12.1811C18.0277 12.0444 17.9985 11.8979 17.9985 11.75C17.9985 11.6021 18.0277 11.4556 18.0843 11.3189C18.1409 11.1823 18.2238 11.0581 18.3284 10.9535C18.433 10.8489 18.5572 10.7659 18.6939 10.7093C18.8305 10.6527 18.977 10.6236 19.1249 10.6236C19.2729 10.6236 19.4193 10.6527 19.556 10.7093C19.6927 10.7659 19.8168 10.8489 19.9214 10.9535L26.6714 17.7035C26.7762 17.808 26.8593 17.9321 26.916 18.0688C26.9728 18.2055 27.002 18.352 27.002 18.5C27.002 18.648 26.9728 18.7945 26.916 18.9312C26.8593 19.0678 26.7762 19.192 26.6714 19.2965L19.9214 26.0465C19.7102 26.2577 19.4237 26.3764 19.1249 26.3764C18.8262 26.3764 18.5397 26.2577 18.3284 26.0465C18.1172 25.8353 17.9985 25.5487 17.9985 25.25C17.9985 24.9513 18.1172 24.6647 18.3284 24.4535L23.1592 19.625L10.1249 19.625C9.82657 19.625 9.54042 19.5065 9.32944 19.2955C9.11846 19.0845 8.99994 18.7984 8.99994 18.5Z"
                          fill="#444444"
                        />
                      </svg>
                    </DetailButton>
                  </a>
                </Link>
              </Description>
            </ContentWrapper>
          </CardContainer>
        </MainDestination>
        <GridWrapper></GridWrapper>
        <InforamationSection TextTitle="Lihat Brosur Wisata" />
      </DestinationWrapper>
    </DestinationContainer>
  );
};

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 4rem 0 1rem 0;
`;
const DestinationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const Hero = styled.div`
  width: 70rem;
  margin: 5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin: 1rem 0 2rem 0;
  .title {
    font-size: 2rem;
    font-weight: 700;
  }
  .sub-title {
    color: #7bae23;
    font-size: 1.15rem;
    font-weight: 500;
  }
`;
const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 10rem 0 1rem 0;
  .title {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
const MainDestination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fef9f4;
  padding: 4rem 0 4rem 0;
  margin: 0 0 4rem 0;
  .title {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const CardContainer = styled.div`
  width: 74rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 1rem 0 0 0;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
  width: 80%;
  height: 20rem;
`;
const ImageWrapper = styled.div`
  width: 35.625rem;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 100%;
  .title {
    font-size: 1.25rem;
  }
  .headline {
    margin-top: 0.5rem;
    color: #929292;
  }
`;
const DetailButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border: 2px #444444 solid;
  padding: 0.3rem 1.5rem 0.3rem 1.5rem;
  width: 15rem;
  margin-top: 3rem;
  font-weight: 600;
  color: #444444;
  cursor: pointer;
  :hover {
    padding: 0.3rem 0.5rem 0.3rem 1.5rem;
  }
`;

const GridWrapper = styled.div``;

export default Index;

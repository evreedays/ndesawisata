import styled from "@emotion/styled";

const Experience = () => {
  return (
    <ExperienceContainer>
      <Description>
        <h2 className="title">What you&apos;ll Experience</h2>
        <p className="headline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          neque diam proin senectus tellus eget. Enim vestibulum suspendisse
          lectus sit ac scelerisque lectus. Lobortis adipiscing rutrum dictum
          proin adipiscing faucibus consectetur leo, cursus. Tincidunt elementum
          ultricies adipiscing{" "}
        </p>
      </Description>
      <BadgeWrapper>
        <LeftBadge></LeftBadge>
        <RightBadge></RightBadge>
      </BadgeWrapper>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 8rem 0 5rem 0;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70rem;
  .headline {
    margin-top: 1rem;
    color: #969696;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const BadgeWrapper = styled.div``;
const LeftBadge = styled.div``;
const RightBadge = styled.div``;

export default Experience;

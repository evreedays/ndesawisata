import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import Gambar from "/public/assets/culture-reog.jpg";

const FeaturedPost = (props) => {
  return (
    <FeaturedPostContainer>
      <FeaturedPostWrapper>
        <Thumbnail className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <Image src={Gambar} alt="detail" height={20} width={32} />
            </a>
          </Link>
        </Thumbnail>
        <Description></Description>
      </FeaturedPostWrapper>
    </FeaturedPostContainer>
  );
};

export default FeaturedPost;

const FeaturedPostContainer = styled.div``;
const FeaturedPostWrapper = styled.div``;
const Thumbnail = styled.div``;
const Description = styled.div``;

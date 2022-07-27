import Image from "next/image";
import styled from "next/image";

const Tujuan = () => {
  return (
    <TujuanContainer>
      <TujuanWrapper>
        <Description>
          <h3 className="tujuan-title">Tujuan</h3>
          <p className="tujuan-description">
            Tujuan dari kegiatan pengembangannya Kawasan Ekowisata Gunung Api
            Purba Nglanggeran adalah meningkatkan kesejahteraan masyarakat
            dengan segala potensi alam dan budaya yang ada sekaligus menjaga
            kelestariannya
          </p>
        </Description>
      </TujuanWrapper>
    </TujuanContainer>
  );
};

export default Tujuan;

const TujuanContainer = styled.div``;
const TujuanWrapper = styled.div``;
const Description = styled.div`
  .tujuan-title {
  }
  .tujuan-description {
  }
`;

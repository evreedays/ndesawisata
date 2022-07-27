import styled from "@emotion/styled";

const VisiMisi = () => {
  return (
    <VisiMisiContainer>
      <VisiWrapper>
        <h3 className="visi-title">Visi</h3>
        <p className="visi-description">
          &#34;Menjadikan Kawasan Ekowisata Gunung Api Purba Nglanggeran menjadi
          kawasan wisata unggulan berwawasan lingkungan berbasis masyarakat&#34;
        </p>
      </VisiWrapper>
      <MisiWrapper>
        <h3 className="misi-title">Misi</h3>
        <p className="misi-description">
          Misi dari pengelola kawasan Ekowisata Gunung Api Purba Nglanggeran
          adalah:
          <ol className="list">
            <li>
              Meningkatkan SDM dan pengelolaan kawasan Ekowisata Gunung Api
              Purba.
            </li>
            <li>Membangun dan meningkatkan kesadaran peduli lingkungan.</li>
            <li>
              Menggalang kemitraan dengan berbagai pihak yang berkompeten dalam
              masalah kepariwisataan dan aktivitas Peduli lingkungan.
            </li>
            <li>
              Melindungi lingkungan di kawasan Ekowisata Gunung Api Purba, baik
              kebudayaaan, flora, fauna dan juga keunikan batuannya.
            </li>
            <li>
              Melibatkan masyarakat dalam proses perencanaan, pelaksanaan,
              pengawasan dan perbaikan/evaluasi terhadap kinerja pengelolaan
              kawasan Ekowisataa Gunung Api Purba.
            </li>
            <li>Melakukan promosi secara efektif dan intensif.</li>
            <li>
              Meningkatkan lama tinggal wisatawan &#40;length&#41; di kabupaten
              Gunungkidul dan Daerah Istimewa Yogyakarta.
            </li>
          </ol>
        </p>
      </MisiWrapper>
    </VisiMisiContainer>
  );
};

export default VisiMisi;

const VisiMisiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  height: auto;
  margin: 8rem 0 5rem 0;
`;
const VisiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  width: 74rem;
  background: #7bae23;
  border: 2px #61900e solid;
  padding: 2rem 4rem;
  color: #ffffff;
  border-radius: 8px;
  .visi-title {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .visi-description {
    font-size: 1.15rem;
    font-weight: 500;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    height: 15rem;
    flex-direction: column;
    border-radius: 0;
    border: 0;
  }
`;
const MisiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 74rem;
  padding: 3rem 4rem;
  border-radius: 8px;
  border: 2px #121212 solid;
  .misi-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  .misi-description {
    width: 85%;
    font-size: 1.15rem;
    font-weight: 500;
    text-align: left;
    .list {
      margin-top: 1rem;
    }
  }
`;

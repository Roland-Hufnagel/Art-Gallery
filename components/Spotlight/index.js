import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <Container>
      <StyledImage src={image} alt="spotlight image" width={400} height={400} />
      <Artist>Artist: {artist}</Artist>
    </Container>
  );
}
const StyledImage = styled(Image)`
  border: 15px solid #555;
 
`;
const Artist = styled.p`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #ddd;
  padding: 5px;
  margin: 0;
`;
const Container = styled.div`
  position: relative;
`;

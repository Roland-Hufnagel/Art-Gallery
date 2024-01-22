import Image from "next/image";

export default function ArtPieceDetail({ image, title, artist, year, genre }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={600} height={600} />
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </>
  );
}

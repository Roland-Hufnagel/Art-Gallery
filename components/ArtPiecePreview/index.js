import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <>
      <Image src={imageSource} alt={name} width={500} height={500} />
      <h2>
        {artist}: {name}
      </h2>
    </>
  );
}

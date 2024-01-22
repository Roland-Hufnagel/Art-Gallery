import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>
        {artist}: {title}
      </h2>
    </Link>
  );
}

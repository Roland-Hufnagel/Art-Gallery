import ArtPieceDetail from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  console.log(piece);
  return (
    <>
      <Link href="/art-pieces">←Back</Link>
      <ArtPieceDetail
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
    </>
  );
}

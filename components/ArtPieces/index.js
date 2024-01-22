import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map(({ slug, name, imageSource, artist }) => {
        return (
          <ArtPiecePreview
            key={slug}
            slug={slug}
            title={name}
            artist={artist}
            image={imageSource}
          />
        );
      })}
    </ul>
  );
}

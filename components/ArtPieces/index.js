import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map(({ slug, name, imageSource, artist }) => {
        return (
          <ArtPiecePreview
            key={slug}
            name={name}
            artist={artist}
            imageSource={imageSource}
          />
        );
      })}
    </ul>
  );
}

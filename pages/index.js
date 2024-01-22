import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const randomIndex = getRandomIndex(0, pieces.length);
  return (
    <div>
      <Spotlight
        image={pieces[randomIndex].imageSource}
        artist={pieces[randomIndex].artist}
      />
    </div>
  );
}

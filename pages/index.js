import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };
  function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const {
    data: pieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) {
    return <h1>something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>is loading...</h1>;
  }
  const randomIndex = getRandomIndex(0, pieces.length);
  console.log("pieces: ", pieces);
  return (
    <div>
      <Spotlight
        image={pieces[randomIndex].imageSource}
        artist={pieces[randomIndex].artist}
      />
      <ArtPieces pieces={pieces} />
    </div>
  );
}

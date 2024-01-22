import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  // const fetcher = (url) =>
  //   fetch(url).then((r) => {
  //     return r.json();
  //   });
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    //console.log("response.json():", await response.json());
    return response.json();
  };
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
  console.log("pieces: ", pieces);
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}

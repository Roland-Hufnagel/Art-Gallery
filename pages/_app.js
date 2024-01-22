import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
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
  console.log(pieces);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={pieces} />
      </Layout>
    </>
  );
}

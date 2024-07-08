// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Layout/Header";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4005",
  cache: new InMemoryCache({
    addTypename: false
  }),
});

export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
import Header from "@/Components/Header/Header";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createPagesBrowserClient());
  const [queryClient] = useState(() => new QueryClient());

  return (
    // <div className=' py-10 px-24'>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        > */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* </SessionContextProvider> */}
      </Hydrate>
    </QueryClientProvider>

    // </div>
  );
}

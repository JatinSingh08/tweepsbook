import Header from "@/Components/Header/Header";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import supabase from "@/utils/supabase";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const [supabaseClient] = useState(() => createPagesBrowserClient(supabase));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </SessionContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

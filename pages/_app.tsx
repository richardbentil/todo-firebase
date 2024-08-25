import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV === "production",
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
      staleTime: Infinity,
    },
  },
});

function fallbackRender({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div
      role="alert"
      className="flex justify-center"
    >
      <div className="text-center">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button
             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
          onClick={() => resetErrorBoundary()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);



  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
      <Suspense fallback={<h1>Loading projects...</h1>}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

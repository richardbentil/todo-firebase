import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

// Create a QueryClient instance for testing
const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

export const TestQueryClientProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

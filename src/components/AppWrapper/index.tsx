"use client"
// _app.tsx or layout.tsx (depending on your Next.js setup)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function AppWrappper({ children }:any) {
  // Create a QueryClient instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    // Wrap your app in the QueryClientProvider and pass the queryClient
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

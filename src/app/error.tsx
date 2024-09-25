'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-8">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5986/5986327.png"
          alt="Error"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Our team has been notified, and we're working on fixing the issue.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <p className="mt-4 text-sm text-gray-500">
          If the problem persists, please <a href="https://dataclaps.com/" className="text-blue-500">contact support</a>.
        </p>
      </div>
    </div>
  );
}

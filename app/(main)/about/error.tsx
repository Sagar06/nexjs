"use client";

import React from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}

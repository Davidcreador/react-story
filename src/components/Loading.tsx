import React from 'react';

export default function Loading({ message }: { message: string }) {
  return (<div className="flex items-center justify-center w-full h-64">{message}...</div>)
}

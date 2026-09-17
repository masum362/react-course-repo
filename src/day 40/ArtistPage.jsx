import { Suspense } from 'react';
import Albums from './Albums';

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1></h1>
      <Suspense fallback={<Loading />}>
        <Albums artistId={""} />
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

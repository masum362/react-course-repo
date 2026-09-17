import {use} from 'react';
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
    }, 2000);
  });
};
export default function Albums({ artistId }) {
  const albums = use(fetchData());
  return (
    // <ul>
    //   {albums.map(album => (
    //     <li key={album.id}>
    //       {album.title} ({album.year})
    //     </li>
    //   ))}
    // </ul>
    <h1>Albums</h1>
  );
}

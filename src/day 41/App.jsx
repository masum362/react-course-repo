import { useLoaderData } from "react-router";
import Navbar from "../day 40/Navbar";
import { useEffect } from "react";

const App = () => {
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
    </div>
  );
};

export default App;

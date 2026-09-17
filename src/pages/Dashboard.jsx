import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router";
import axios from "axios";
import { set } from "zod";

const Dashboard = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  console.log(name);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicoe.com/users/1",
      );
      setUser(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <p>Name: {user.name}</p>
          {/* <p>Email: {user.email}</p> */}
        </div>
      )}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About
      </button>
    </div>
  );
};

export default Dashboard;

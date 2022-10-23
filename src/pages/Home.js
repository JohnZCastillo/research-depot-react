import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Search from "../components/forms/Search";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // if there is no present token we assumes the user's role is visitor
    // if (!localStorage.getItem("key")) navigate("/about");
  }, []);

  return (
    <>
      <Navigation />
      <Search />
    </>
  );
};

export default Home;

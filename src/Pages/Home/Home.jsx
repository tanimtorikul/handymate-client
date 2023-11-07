import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularServices from "../Services/PopularServices";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HandyMate | Home</title>
      </Helmet>
      <Banner />
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import { HomeContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <Main />
      <Footer />
    </HomeContainer>
  );
};

export default Home;

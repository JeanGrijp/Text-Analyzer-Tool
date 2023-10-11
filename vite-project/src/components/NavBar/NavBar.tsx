import { NavBarContainer } from "./NavBar.styles";
import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1>Text Analyzer Tool</h1>
      <div className="linksIcon">
        <SiGithub />
        <SiTwitter />
        <SiInstagram />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;

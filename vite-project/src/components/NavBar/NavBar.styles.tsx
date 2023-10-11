import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f3daff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 10vh;
  width: 100%;

  & > h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: auto 0;
    color: #221031;
  }

  & > div.linksIcon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    font-size: 1.5rem;
    color: #221031;

    & > * {
      cursor: pointer;
    }
  }
`;

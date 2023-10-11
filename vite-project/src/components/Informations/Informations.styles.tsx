import styled from "styled-components";

export const InformationsContainer = styled.section`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-around;
  height: 10vh;
  width: 100%;
  background-color: #f3daff;
  border-radius: 1rem 1rem;

  & > div.blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    /* border: 1px solid #221031; */

    & > h2,
    h1 {
      font-size: 1em;
      font-weight: 700;
      margin: auto 0;
      color: #221031;
    }

    & > h2 {
      font-weight: 400;
    }
  }
`;

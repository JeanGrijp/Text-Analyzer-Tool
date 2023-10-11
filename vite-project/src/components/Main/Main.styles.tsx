import styled from "styled-components";

export const TextAreaContainer = styled.section`
  height: 90vh;
  width: 100%;
  padding: 3em 2em;

  /* border: 5px solid red; */

  & > div.textAreaContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

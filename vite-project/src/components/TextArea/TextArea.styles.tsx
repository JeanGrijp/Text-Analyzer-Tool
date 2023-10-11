import styled from "styled-components";

export const TextAreaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 60%;
  width: 100%;
  /* padding: 3em 2em; */
  background-color: #f3daff;
  border-radius: 1rem;

  .textArea {
    outline: none;
    border-radius: 1rem;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    resize: none;
    padding: 2em;
    font-size: 1.5rem;
    background-color: #f3daff;
  }

  /* border: 5px solid red; */
`;

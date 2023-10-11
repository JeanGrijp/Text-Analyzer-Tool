import React from "react";
import { InformationsContainer } from "./Informations.styles";

interface InformationsProps {
  wordsCount: number;
  caractereCount: number;
  sentencesCount: number;
  paragraphsCount: number;
  pronoumsCount: number;
}

const Informations = (props: InformationsProps) => {
  return (
    <InformationsContainer>
      <div className="blocks">
        <h2>Palavras</h2>
        <h1>{props.wordsCount}</h1>
      </div>
      <div className="blocks">
        <h2>Carecteres</h2>
        <h1>{props.caractereCount}</h1>
      </div>
      <div className="blocks">
        <h2>Frases</h2>
        <h1>{props.sentencesCount}</h1>
      </div>
      <div className="blocks">
        <h2>Parágrafos</h2>
        <h1>{props.paragraphsCount}</h1>
      </div>
      <div className="blocks">
        <h2>Pronomes</h2>
        <h1>{props.pronoumsCount}</h1>
      </div>
    </InformationsContainer>
  );
};

export default Informations;

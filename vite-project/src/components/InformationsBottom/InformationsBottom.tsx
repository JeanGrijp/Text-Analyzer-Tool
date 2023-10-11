import React from "react";
import { InformationsBottomContainer } from "./InformationsBottom.styles";

interface IInformationsBottomProps {
  timeMedioReading: string;
  longestWord: string;
  setLongestWord: React.Dispatch<React.SetStateAction<string>>;
  setTimeMedioReading: React.Dispatch<React.SetStateAction<string>>;
}

const InformationsBottom = (props: IInformationsBottomProps) => {
  return (
    <InformationsBottomContainer>
      <div className="left">
        <h2>Tempo médio de leitura</h2>
        <h1>{props.timeMedioReading}</h1>
      </div>
      <div className="right">
        <h2>Maior palavra</h2>
        <h1>{props.longestWord}</h1>
      </div>
    </InformationsBottomContainer>
  );
};

export default InformationsBottom;

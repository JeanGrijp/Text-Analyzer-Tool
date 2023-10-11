import { useState } from "react";
import Informations from "../Informations/Informations";
import TextArea from "../TextArea/TextArea";
import { TextAreaContainer } from "./Main.styles";
import InformationsBottom from "../InformationsBottom/InformationsBottom";

const Main = () => {
  const [wordsCount, setWordsCount] = useState(0);
  const [caractereCount, setCaractereCount] = useState(0);
  const [sentencesCount, setSentencesCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);
  const [pronoumsCount, setPronoumsCount] = useState(0);
  const [timeMedioReading, setTimeMedioReading] = useState<string>("");
  const [longestWord, setLongestWord] = useState<string>("");

  return (
    <TextAreaContainer>
      <div className="textAreaContainer">
        <Informations
          wordsCount={wordsCount}
          caractereCount={caractereCount}
          sentencesCount={sentencesCount}
          paragraphsCount={paragraphsCount}
          pronoumsCount={pronoumsCount}
        />
        <TextArea
          wordsCount={wordsCount}
          caractereCount={caractereCount}
          sentencesCount={sentencesCount}
          paragraphsCount={paragraphsCount}
          pronoumsCount={pronoumsCount}
          setWordsCount={setWordsCount}
          setCaractereCount={setCaractereCount}
          setSentencesCount={setSentencesCount}
          setParagraphsCount={setParagraphsCount}
          setPronoumsCount={setPronoumsCount}
          timeMedioReading={timeMedioReading}
          setTimeMedioReading={setTimeMedioReading}
          longestWord={longestWord}
          setLongestWord={setLongestWord}
        />
        <InformationsBottom
          timeMedioReading={timeMedioReading}
          setTimeMedioReading={setTimeMedioReading}
          longestWord={longestWord}
          setLongestWord={setLongestWord}
        />
      </div>
    </TextAreaContainer>
  );
};

export default Main;

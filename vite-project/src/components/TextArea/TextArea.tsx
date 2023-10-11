import React, { useState, useEffect } from "react";
import { TextAreaContainer } from "./TextArea.styles";
import { pronounsEnglish, pronounsPortuguese } from "../../data/Pronouns";
// import moment from "moment";

interface ITextAreaProps {
  wordsCount: number;
  caractereCount: number;
  sentencesCount: number;
  paragraphsCount: number;
  pronoumsCount: number;
  timeMedioReading: string;
  longestWord: string;
  setLongestWord: React.Dispatch<React.SetStateAction<string>>;
  setTimeMedioReading: React.Dispatch<React.SetStateAction<string>>;
  setWordsCount: React.Dispatch<React.SetStateAction<number>>;
  setCaractereCount: React.Dispatch<React.SetStateAction<number>>;
  setSentencesCount: React.Dispatch<React.SetStateAction<number>>;
  setParagraphsCount: React.Dispatch<React.SetStateAction<number>>;
  setPronoumsCount: React.Dispatch<React.SetStateAction<number>>;
}

const TextArea = (props: ITextAreaProps) => {
  const [text, setText] = useState("");

  const calculateTimeMedioReading = (param: number) => {
    const time = param / 225;
    console.log("time", time);
    if (time === 0) {
      return "0";
    } else if (time <= 1) {
      return `~ ${(time * 60).toFixed(2)} segundos`;
    } else if (time > 1 && time <= 60) {
      return `~ ${time.toFixed(2)} minutos`;
    } else {
      return "...";
    }
  };

  const calculateLongestWord = (param: string[]) => {
    let longestWord = "";
    param.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
    props.setLongestWord(longestWord);
    return longestWord;
  };

  // const splitTextSentences = (param: string) => {
  //   let auxText = ""
  //   let finalListSentences = []
  //   for (let i = 0; i < param.length; i++) {
  //     if (param[i] !== "." || param[i] !== "!" || param[i] !== "?") {
  //       auxText = auxText + param[i]
  //     } else {
  //       finalListSentences.push(auxText)
  //       auxText = ""
  //     }
  //   }
  //   return finalListSentences
  // }

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // console.log("text", text);
    // console.log("text.length", text.trim().length);
    let pronoums = 0;
    // const regexTest = /\.\?!/g
    const words = text
      .trim()
      .split(" ")
      .filter((word) => word !== "");
    const sentences = text
      .trim()
      .replace("?", ".")
      .replace("!", ".")
      .replace("...", ".")
      .split(".")
      .filter((sentence) => {
        if (
          sentence !== "" ||
          sentence !== undefined ||
          sentence !== null ||
          sentence !== "\n" ||
          sentence !== " "
        ) {
          return sentence;
        }
      });
    const paragraphs = text
      .trim()
      .split("\n")
      .filter((paragraph) => paragraph !== "");
    const caractere = text.split("").length;

    console.log("text", text);

    console.log("words", words);
    console.log("sentences", sentences);
    console.log("paragraphs", paragraphs);
    console.log("caractere", caractere);
    props.setWordsCount(words.length);
    props.setSentencesCount(sentences.length);
    props.setParagraphsCount(paragraphs.length);
    props.setCaractereCount(caractere);
    words.forEach((word) => {
      if (
        pronounsPortuguese.includes(word.toLowerCase()) ||
        pronounsEnglish.includes(word.toLowerCase())
      ) {
        pronoums++;
      }
    });
    props.setPronoumsCount(pronoums);

    const readingTime = words.length / 225;

    console.log("readingTime", calculateTimeMedioReading(words.length));
    props.setTimeMedioReading(calculateTimeMedioReading(words.length));

    console.log(`${readingTime} min`);

    console.log("longestWord", calculateLongestWord(words));
  }, [text]);

  useEffect(() => {
    console.log("wordsCount", props.wordsCount);
  }, [props.wordsCount]);

  return (
    <TextAreaContainer>
      <textarea className="textArea" onChange={handleChangeTextArea} />
    </TextAreaContainer>
  );
};

export default TextArea;

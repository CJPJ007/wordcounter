import React, { useState } from "react";
import Title from "./Title";
import WordCount from "./WordArea/WordCount";
import CharacterCount from "./WordArea/CharacterCount";

export default function WordArea() {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [text,setText] = useState('');
  const updateCounts = (e) => {
    setText(e.target.value);
    setCharCount(e.target.value.length);
    let wordArray = e.target.value.split(" ");
    wordArray = wordArray.filter((element)=>(element.length!==0));
    setWordCount(wordArray.length);
  };

  const handleClear = () => {
    setCharCount(0);
    setWordCount(0);
    setText('');
  }
  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <Title title={"Word Counter"} />
      <p>Free online word and character counter</p>
      <textarea
        className="border-[1px] border-gray-400/50 p-2 rounded-md w-1/2 h-1/3 focus:outline-none"
        onChange={updateCounts}
        value={text}
      ></textarea>
      <button className="px-2 py-1 bg-red-600 rounded-md text-white" onClick={handleClear}>Clear</button>
      <div className="flex justify-between w-1/2">
        <WordCount wordCount={wordCount}/>
        <CharacterCount charCount={charCount}/>
      </div>
    </div>
  );
}

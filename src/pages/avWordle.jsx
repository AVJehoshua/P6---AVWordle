import { useState } from "react";

export const AVWordlePage = () => {
  // let [word, setWord] = useState([]);
  document.title = "AV Guess"

  const fetchWord = async () => {
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?length=5`
      );
      const data = await response.json(); //  await statement necessary as data might be returned after completion of program

      console.log("fetched data word: ", data[0]); // returns pending promise // fixed, by adding await statement next to response ^
      // console.log("fetched data list: ", data); // returns word in list, above line returns word
      // setWord(data[0]);
    } catch (error) {
      console.log("error fetching all data: ", error);
    }
  };

  return (
    <>
      <h1> AVWordle Guess </h1>
      <p> Here to help with your wordle guesses </p>
      <button onClick={fetchWord}> Click me to get your wordle</button>
      {/* {word.map((data) => {
        return (
          <h1 className="word" key={data.id}> {data} </h1>
        );
      })}; */}


      {/* <p>Your word is {word}</p> */}
    </>
  );
};

export default AVWordlePage;

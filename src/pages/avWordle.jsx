import { useState } from "react";

export const AVWordlePage = () => {
  let [word, setWord] = useState();
  let [letter, setLetter] = useState();
  let [position, setPosition] = useState();
  let [isSubmit, setIsSubmit] = useState(false)
  document.title = "AVGuess";

  const fetchWord = async () => {
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?length=5`
      );
      const data = await response.json(); //  await statement necessary as data might be returned after completion of program

      console.log("fetched data word: ", data[0]); // returns pending promise // fixed, by adding await statement next to response ^
      // console.log("fetched data list: ", data); // returns word in list, above line returns word
      setWord(data[0]);
    } catch (error) {
      console.log("error fetching all data: ", error);
    }
  };
  const handleChange = (e) => {
    setIsSubmit(true)
    try {
      const value = e.target.value;
    
      if ( value === "s") {
        setLetter(value);
      } else if ( value === 1) {
        setPosition(value);
      }
      console.log('letter', letter)
      console.log('position', position)
    } catch (error) {
      console.log('Error submitting:', error)
    } finally {
      setIsSubmit(false)
    }
  }
  


  return (
    <>
      <div className="heading">
        <h1> AVWordle Guess </h1>
      </div>
      <div className="paragraph">
        <p> Need help with your wordle opening?</p>
      </div>
      <button onClick={fetchWord}> Click me  </button>
      <div className="result">
        <h3>Your word is {word} </h3>
      </div>

      <p>Input your letters, below</p>
      <input></input> 
      <br></br>
      <br></br>
      <input type="submit" onClick={handleChange}></input>

      <p>Your letter was: {letter}</p>
      <p>It's at position: {position}</p>


    </>
  );
}; 

export default AVWordlePage;

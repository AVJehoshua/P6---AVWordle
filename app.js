

import { useEffect } from "react"


export const AVWordlePage = () => {
  
  const fetchWord = async () => {
    // let allData = []
    try {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?length=5`)
      const data = await response.json() //  await statement necessary as data might be returned after completion of program
    
      // allData.push(data.data)
      // console.log('raw results: ', response)
      console.log('fetched data word: ', data[0]) // returns pending promise // fixed, by adding await statement next to response ^
      console.log('fetched data list: ', data) // returns word in list, above line returns word
      // res.json(allData)
    } catch (error) {
      console.log('error fetching all data: ', error)
    }
  }
  fetchWord()
  
  // const word = () => {
  //   useEffect(()=> {
  //     fetchWord()
  //   })
  // }
  // word()
  
// 
//   return (
// <>
// </>
//   )
}
console.log(AVWordlePage())



export default AVWordlePage;


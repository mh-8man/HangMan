/**
 * 
 * js file that is used to return a word.
 * The word is to be guessed. 
 * 
 */


const wordListEn = ["application", "water", "keyboard", "board", "parrot", "stairs"]
const wordListNo = ["applikasjon", "vann", "tastator", "maskin", "studiet", "heis"]

/**
 * function that returns a random index of the list of words
 * 
 * @param {min length} min 
 * @param {max lenngth} max 
 * @returns 
 */
function randomIndex(min , max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   * function that reurn a random word from the corresponding language
   * 
   * @param {language} lang 
   * @returns 
   */
export const  getWord = (lang) =>{  
  if(lang ==="en"){
    let ran = randomIndex(0,wordListEn.length -1)
        return wordListEn[ran]
  }else  {
    let ran = randomIndex(0,wordListNo.length -1)
    return wordListNo[ran]
  }
};


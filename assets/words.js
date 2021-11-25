
const wordListEn = ["application", "water", "keyboard", "board", "parrot", "stairs"]
const wordListNo = ["applikasjon", "vann", "tastator", "maskin", "studiet", "heis"]


function randomIndex(min , max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export const  getWord = (lang) =>{  
  if(lang ==="en"){
    let ran = randomIndex(0,wordListEn.length -1)
        return wordListEn[ran]
  }else  {
    let ran = randomIndex(0,wordListNo.length -1)
    return wordListNo[ran]
  }
};


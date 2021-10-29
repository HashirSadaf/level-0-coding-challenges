function commonLetters(string1,string2) {
  let common = []
  let compare = []

  for(let i = 0; i < string1.length; i++) {
  }
  for(let i = 0; i < string2.length; i++) {
  }

 string1 = new Set(string1.toLowerCase())
 string2 = new Set(string2.toLowerCase())

 string1 = Array.from(string1).join('')
 string2 = Array.from(string2).join('')

 let letters = string1 + string2


 for(let i of letters) {
     if(!compare.includes(i)){
         compare.push(i)
     } else {
         common.push(i)
     }
 }
 
 common = common.toString()

 return "Common letters: " + common

} 

console.log(commonLetters("Am I the best??","I am the best"));
function isolateVowels(vowels) {
    vowels = vowels.replace( /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '' );


    vowels = vowels.toLowerCase()
    vowels = new Set(vowels)
    vowels = Array.from(vowels)


    console.log("Vowels: " + vowels)
}  

console.log(isolateVowels("I am the best in the universe, and if you disagree you are wrong!!"));
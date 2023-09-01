
function shuffleAndExtractNCharacters(inputString, n) {
    const shuffledArray = inputString.split(''); // Convert string to an array
    let currentIndex = shuffledArray.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex]
      ];
    }
    const extractedCharacters = shuffledArray.slice(0, n);
    const resultString = extractedCharacters.join('');
    return resultString;
  }
  function generateShuffledPassFromInputChars(charType, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const special = `~!$%^&*()_+><?/";:`;
  
    switch (charType) {
      case 'upper':
        return shuffleAndExtractNCharacters(upper, n);
      case 'lower':
        return shuffleAndExtractNCharacters(lower, n);
      case 'number':
        return shuffleAndExtractNCharacters(number, n);
      case 'special':
        return shuffleAndExtractNCharacters(special, n);
      default:
        return 'Enter a valid option';
    }
  }
module.exports={
    shuffleAndExtractNCharacters, generateShuffledPassFromInputChars
}

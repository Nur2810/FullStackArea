
function reverseWordsWithoutArray(sentence) {
    let result = "";
    let word = "";
  
    for (let i = sentence.length - 1; i >= 0; i--) {
      if (sentence[i] === " ") {
        result += word + " ";
        word = "";
        console.log(word);
      } else {
        word =  sentence[i] + word;// değiştir
        console.log(word);
      }
    }
  
    result += word;
    console.log(result);
    return result;
  }
  
  console.log(reverseWordsWithoutArray("Hello Js World 2023"));

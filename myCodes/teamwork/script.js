function reverseWord(sentence) {
  let result = "";
  let word = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] != " ") {
       word = sentence[i]+word;
      console.log(word);
    }
    // } else {
    // 
    // }
  }
  result += word;
  console.log(result);

  return result;
}

console.log(reverseWord("Hello Js World 2023"));

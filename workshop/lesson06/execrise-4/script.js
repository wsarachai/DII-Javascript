'use strict';

// ### Hints:
// - Remember which character defines a new line in the textarea 😉
// - The solution only needs to work for a variable made out of 2 words, like a_b
// - Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// - This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

const textArea = document.createElement('textarea');
const clickBtn = document.createElement('button');

clickBtn.textContent = 'OK';
clickBtn.addEventListener('click', function () {
  const value = textArea.value;
  console.log(value);
});

document.body.append(textArea);
document.body.append(clickBtn);

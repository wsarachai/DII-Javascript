## [Home](../../../README.md) > [Back](../lesson.md) > Execrise #1

### Gassing number game

### Your tasks:

1. Implement the real Guess the Number Game.
   <br/><br/><img src="img.png" width="350"/><br/><br/>

   - Init the variables and the secret number
     ```
     let secretNumber = Math.trunc(Math.random() * 20) + 1;
     let score = 20;
     let highscore = 0;
     ```
   - Create the `displayMessage` function

   ```
   const displayMessage = function (message) {
     document.querySelector('.message').textContent = message;
   };
   ```

   - Add the `click` listener to the `check!` button to Check the correct number.

     ```
     document.querySelector('.check').addEventListener('click', function () {

     });
     ```

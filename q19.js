// Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
// Example Input:getRandomNumber()
// Expected Output:
// A promise object that will be resolved with a random number between 1 and 10 if it is greater than or equal to 5. If the generated number is less than 5, the promise should be rejected.


function getRandomNumber() {
    return new Promise(function (resolve, reject) {
      var randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber >= 5) {
        resolve(randomNumber);
      } else {
        reject("Generated number is less than 5");
      }
    });
  }
  
  getRandomNumber()
    .then(function (randomNumber) {
      console.log("Resolved:", randomNumber);
    })
    .catch(function (error) {
      console.log("Rejected:", error);
    });
  
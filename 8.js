let counter = 0;
let guess;
let end = 1000000;
let start = 0;

let random = Math.floor(Math.random() * 1000000);

console.log(random);

function verify(guess) {
  if (guess == random) {
    return 0;
  } else if (guess > random) {
    return 1;
  } else {
    return -1;
  }
}

function solution() {
  for (i = 1; i < 51; i++) {
    counter++;
    if (i == 50) {
      verify = null;
      console.log("You lose");
    } else {
      guess = parseInt((start + end) / 2);
      console.log(`Guess is: ${guess}`);
      let state = verify(guess);
      if (state == 1) {
        end = guess;
      } else if (state == -1) {
        start = guess;
      } else {
        console.log(`You won, it was: ${guess}, try number is: ${counter}`);
        break;
      }
    }
  }
}

solution();

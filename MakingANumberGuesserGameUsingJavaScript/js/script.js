let numberTriedCount = 0; 

function gameplay() {
     let low = 1;
     let high = 10;

     function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
     }

     let correct_ans = getRandomIntInclusive(low, high);
     let i = 3;
     console.log(correct_ans);
     while (i > 0) {
          let number = prompt(`Guess a number between 1 to 10.(you have ${i} chances)`);
          i--;

          if (number < correct_ans && i > 0) {
               alert(`Correct answer is greater! you have ${i} chance`);
          } else if (number > correct_ans && i > 0) {
               alert(`Correct answer is smaller! you have ${i} chance`);
          } else if (number == correct_ans) {
               alert('You Win!');
               break;
          } else if (i == 0) {
               alert('You lose!');
               break;
          }
     }

     numberTried.innerHTML = `${++numberTriedCount}`; 
}

const game = document.querySelector('#game');
game.addEventListener('click', gameplay);

const numberTried = document.querySelector('#numberTried');

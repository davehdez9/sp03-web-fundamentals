// Countdown

/*Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"*/

function countDown(num) {
  //the setInterval Method will call a function every 1000 milliseconds
  let chronometer = setInterval(function () {
    // tre argument will decreased every 1000 milliseconds
    num--;
    // if the num <= 0 the num will decrease until it reaches 0
    if (num <= 0) {
      // the setInterval will continue calling the function until clearInterval is called(chronometer)
      clearInterval(chronometer);
      //Once the number reaches zero the count is done.
      console.log('Done');
    } else {
      console.log(num);
    }
  }, 1000);
}

//randomGame

/*Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75. */

function randomGame() {
  let number;
  let numberTimes = 0;
  let timer = setInterval(function () {
    // create a random number between 0 and 1
    number = Math.random();
    //each time that a random number is picked, add 1 to a numberTimes.
    numberTimes++;
    // if num > 0.75 - stop the setInterval
    if (number > 0.75) {
      clearInterval(timer);
      //console number of tries it took before we found a number greater than .75
      console.log(numberTimes);
    }
    // Every 1000 milliseconds a number will be created
  }, 1000);
}

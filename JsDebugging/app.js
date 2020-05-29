//JavaScript Debugging

/* ---------- 4. CONSOLE.LOG DEBUGGING */

// Example #1
// function hasEnoughFundsToBuy(price, qty, balance) {
//   const subtotal = Math.round(price * qty * 100) / 100;
//   console.log('Subtotal:', subtotal);
//   console.log('Balance:', balance);
//   if (subtotal <= balance) {
//     return 'YOU HAVE ENOUGH MONEY';
//   }
//   return 'SORRY, YOU NEED MORE MONEY TO BUY THAT';
// }

// NOT ENOUGH MONEY
// hasEnoughFundsToBuy(50.5, 10, 300);
// hasEnoughFundsToBuy(200.3, 6, 600.9);

// ENOUGH MONEY
// hasEnoughFundsToBuy(10, 6, 60);
// hasEnoughFundsToBuy(30, 3, 100);
// hasEnoughFundsToBuy(200.3, 3, 600.9);

// Example #2
// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   // fix the logic
//   sum += grades[i];
//   console.log('i', i);
//   console.log('grade', grades[i]);
//   console.log('sum', sum);
// }
// let avg = sum / grades.length;

/* ---------- 5. CHROME DEBUGGER */

// Example #1
// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// debugger;
// for (let i = 0; i <= grades.length; i++) {
//   sum += grades[i];
// }
// let avg = sum / grades.length;

/* ---------- 7.try/catch */

//Example #1
// functionThatDoesNotExist();
// console.log('did we make it?'); // ReferenceError: function is not defined

// try {
//   functionThatDoesNotExist();
// } catch {
//   console.log('OH NO ERROR!!!');
// }
// console.log('DID WE MAKE IT?!!!');

//Example #2
// try {
//   // asdasdas();
//   undefined.pop();
//   let msg =
// } catch (e) {
//   console.log('Oh no Error!!!');
//   console.log(e);
// }
// console.log('did we make it!');

// Example #3
// function displayInitials(user) {
//   let firstNameLetter = user.firstName[0].toUpperCase();
//   let lastNameLetter = user.lastName[0].toUpperCase();
//   return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

// displayInitials({ firstName: 'Jason', lastName: 'Momoa' });

// function displayInitials(user) {
//   let firstNameLetter;
//   let lastNameLetter;
//   try {
//     firstNameLetter = user.firstName[0].toUpperCase();
//     lastNameLetter = user.lastName[0].toUpperCase();
//   } catch (e) {
//     return 'Invalid input!';
//   }
//   return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

/* ---------- 8.finally */

// try {
//   console.log('Inside Try');
//   // undefined.pop();
// } catch (e) {
//   //  BUT WE CATCH IT !!!
//   console.log('Oh no Error!!!');
//   console.log(e);
// } finally {
//   console.log('Inside finally');
// }
// console.log('did we make it!!!');

/* ---------- 9.Throwing Errors */

// console.log('I am the error');
// throw 'I am the error!!!';
// console.log('I am after the error');

//Example #1
// try {
//   throw 'I am the error!!!';
//   // undefined.pop();
// } catch (e) {
//   console.log('There was an error...', e);
// }

// try {
//   throw new Error('I am the error!!!');
//   // undefined.pop();
// } catch (e) {
//   console.log('There was an error...', e);
//   console.dir(e);
// }

// try {
//   throw new TypeError('I do not like you doing that!');
//   // undefined.pop();
// } catch (err) {
//   console.log('what kind of error?', err.name);
//   console.log('what is the message?', err.message);
//   console.log('where did it happen?', err.stack);
// }

//Example #2
// function DataError(message) {
//   this.message = message;
//   this.name = 'DataError';
// }

// function getMonthName(mo) {
//   if (typeof mo !== 'number') {
//     throw new DataError('Months number must be a number!');
//   }
//   mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//   const months = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];

//   if (months[mo]) {
//     return months[mo];
//   } else {
//     throw new Error('Month out of bounds');
//   }
// }

// try {
//   getMonthName('masma');
// } catch (e) {
//   console.log('Error:', e);
// }

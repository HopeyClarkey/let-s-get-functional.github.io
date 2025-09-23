// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

_.filter = function(array, func){
    const output =[];
    for (let i  = 0; i< array.length; i++){
        if (func(array[i], i, array)){
            output.push(array[i])
        }
    }
    return output;
}

// will need .filter, .map, & .reduce
//i- take an array
//finds number of male Customers
var maleCount = function(array) {
const males = _.filter(array, (cust) => cust.gender === 'male');
    return males.length;
};


/*var femaleCount = function(array){
    let stArr =[];
    for (var i = 0; i < array.length; i++){
      if (array[i].gender === 'female'){
          stArr.push(array[i]);
      }
    }
    return stArr.length;
  };
*/

var femaleCount = function(array){
    const females = _.filter(array, (cust) => cust.gender === 'female');
    return females.length;
};

var oldestCustomer = function(array){
    let oldest = array.filter(cust => cust.age);
    oldest.reduce((largest, current) => (current > largest ? current : largest), oldest[0]);
};

var youngestCustomer = function(array){

};

var averageBalance = function(array){
    let output = 0;
    let stArr = [];
    for(let i = 0; i < data.length; i ++){
    stArr.push(array[i]."balance".split(1));
    }

};

var firstLetterCount = function(array, letter){
    let users = array.filter(user => user.name.startsWith(letter));
    return users.length;
};

var friendFirstLetterCount = function(array, letter){
    let users = array.filter(user => user.name.startsWith(letter));
    return users.length;
};

var friendsCount = function(array){

};

var topThreeTags = function(array){

};

var genderCount = function(array){

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;

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
    let oldest = array.reduce((largest, current) => {
// declare variable, reduce array with the 'largest' vs the current value
        return current.age > largest.age ? current : largest;
//whoo terenary, is current > 'largest' ? yep, current, nope, largest;
    }).name;
//and now we are back outside, with dot notation of the name assiged to variable
    return oldest; //returrrn that variable
};

var youngestCustomer = function(array){
    let youngest = array.reduce((youngest, currently) => {
//declare variable, reduce array, params youngest and currently into function
        return currently.age < youngest.age ? currently : youngest;
//take the current age, compare to the youngest age, yep, current, nope, youngest
    }).name;
//grab that name on the outside of the reduce
    return youngest;
//bring that variable home
};

var averageBalance = function(array){
    let stArr = []; 
//create storage array for balances
    let output =0; 
//create output for number to fall
    for(let i = 0; i < array.length; i ++){ 
//loop through and push balances
        stArr.push(array[i].balance); 
//push key values of balance to starr
    } 
//get out of for loop
    stArr = stArr.map((balances) => balances.replace(/[$,]/g, '')); 
//remove with regex $ & ,
    stArr = stArr.map((numbers) => Number(numbers)); 
//turn all those things to nummbas
    for(let j = 0; j < stArr.length; j++){ 
//loop through again
        output += stArr[j]; 
//update the output #
    }
//get out of for loop
    output = output / stArr.length; 
//reassign output to divide that output # by the stArr length
    return output; //return that new output
        //boom!
};

var firstLetterCount = function(array, letter){
//takes an array and a lookup letter
    let users = array.map((user) => user.name.toLowerCase()); 
//map new array moving all entries to lowercase
    let mappedUsers = users.filter((moreUsers) => moreUsers.startsWith(letter.toLowerCase())); 
//filter another array comparing the start letter(lowercased)
    return mappedUsers.length;
//return the new array length
};

var friendFirstLetterCount = function(array, srchName, letter){ //takes an array, a person to find, and a search letter
    const results = array.filter((cust) => cust.name === srchName); //create filter with the elements named cust, does cust == search name?
    let customer = results[0];//creates object out of filter array result
    let friends = customer.friends; //defines friends array within object
    const matchingFriends = friends.filter((friend) => friend.name[0].toLowerCase() === letter.toLowerCase()
    //filter friends array, name element friend, also modify to lower case, and check search letter in lower case.
    );
    return matchingFriends.length; //return amount of array elements
}

var friendsCount = function(array){

};

var topThreeTags = function(array){

};

var genderCount = function(array){
    const males = _.filter(array, (cust) => cust.gender === 'male');
    const females = _.filter(array, (cust) => cust.gender === 'female');
    const nonBi = _.filter(array, (cust) => cust.gender === 'non-binary');
    let obj = {
        male: (males.length),
        female: (females.length),
        'non-binary': (nonBi.length)
    };
    return obj;

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

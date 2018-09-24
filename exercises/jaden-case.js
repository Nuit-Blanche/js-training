'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(firstName) {
    firstName = firstName.split(" ");

    for(let i=0 ; i < firstName.length ; i++){
        firstName [i] = firstName[i].charAt(0).toUpperCase() + firstName[i].substring(1).toLowerCase();
    }

return firstName.join(" ");

}

//* Begin of tests
const assert = require('assert')

jadenCase('you are famous thancks to your father bitch!')
// End of tests */

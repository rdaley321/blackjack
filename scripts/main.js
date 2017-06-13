/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let newHand = []
  let value = 0
  let totalAces = 0
  for(let i=0 ; i < hand.length; i++) {
    if(hand[i] >= 1 && hand[i] <= 10) {
      newHand.push(parseInt(hand[i]))
    } else if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      newHand.push(10)
    } else if(hand[i] === "A") {
      totalAces += 1
    }
  }
  for(let j=0; j < newHand.length; j++) {
    value += newHand[j]
  }
  for(let k=0; k < totalAces ; k++) {
    if(value <= 10) {
      value += 11
    } else {
      value +=1
    }
  }
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

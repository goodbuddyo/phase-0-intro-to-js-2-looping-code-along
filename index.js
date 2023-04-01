// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];


// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.lenght; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(stringArray, eventName) {
  let newArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    newArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`)
    console.log(i);
  }
  // console.log(newnpm testArray);
  return newArray;
}
writeCards(names, "surprise");


function countDown(positiveIntiger) {
  // positiveIntiger = Math.abs(positiveIntiger);
  while (positiveIntiger >= 0) {
    console.log(positiveIntiger);
    positiveIntiger--;
  }
}

countDown(5);

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log ("I am 1 strange loop.")
    } else {
      console.log ("I am " + i + " strange loops.")
    }
  }
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function whileLoop (n) {
  let countdown = 100;

  while (maybeTrue()) {
    console.log (--countdown)
  }
  return console.log("done")

}


function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue()) {
  return array
  }
}

const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let obj = array.find(function(e) {return e.result === "W"})
  return (obj !== undefined) ? obj.year : undefined
}
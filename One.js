// localmodule

function myFunc() {
  console.log("function working");
}
let x = 66;
// multiple exports
module.exports.myFunc = myFunc;
module.exports.x = x;

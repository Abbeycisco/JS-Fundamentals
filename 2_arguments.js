const Args= process.argv.slice(2);
const firstArg = Args[0];
const secondArg = Args[1];
if(firstArg === undefined || secondArg === undefined) {
  console.log("No Argument");
} else if(firstArg !== undefined && secondArg === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
const readline = require("readline");
const db = require("./Database");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside aync function do not need closure demo only
// (async () => {
//   try {
//     const name = await prompt("What's your username: ");
//     const pass = await prompt(`What's your password: `);
//     await doLogin(name, pass);
//     rl.close();
//   } catch (e) {
//     console.error("Unable to prompt", e);
//   }
// })();

function doLogin(userName, password) {
  return db.validateUser(userName, password);
}
doLogin("userName, password");
rl.on("close", () => process.exit(0));

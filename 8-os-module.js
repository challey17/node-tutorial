//OPERATING SYSTYEM MODULE!
// built in module, part of node so when you run node, os is there
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
// how long machine has been running
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  EOL: os.EOL,
};

console.log(currentOS);

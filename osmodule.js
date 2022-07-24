const os = require('os');
const user = os.userInfo();

console.log(user);

const uptime = os.uptime();
console.log(`uptime: ${uptime} s`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem()
}
console.log(currentos);

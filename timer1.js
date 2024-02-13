const args = process.argv.slice(2);
let a = 0;
for (let i of args) {
a = i * 1
if (isNaN(a)) {
  a = 0;
  continue;
}
  if (a < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, i * 1000);
}
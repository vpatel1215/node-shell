const pwd = require('./pwd');
process.stdout.write('prompt > ');

process.stdin.on('data', (input) => {
  const cmd = input.toString().trim();
  if (cmd === 'pwd') {
      pwd();
  }
  //process.stdout.write(cmd);
})
//console.log('hello')

//pwd();
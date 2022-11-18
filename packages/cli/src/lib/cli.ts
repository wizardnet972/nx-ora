import * as ora from 'ora';

const spinner1 = ora('Running Plugins...').start();

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log('press command/ctrl+c to exit');

console.log(fibonacci(1990));

spinner1.succeed();

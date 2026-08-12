import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const filteredArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--host') {
    if (i + 1 < rawArgs.length && !rawArgs[i + 1].startsWith('-')) {
      i++;
    }
  } else if (arg.startsWith('--host=')) {
    // skip
  } else {
    filteredArgs.push(arg);
  }
}

const child = spawn('npx', ['next', 'dev', '-p', '3000', '-H', '0.0.0.0', ...filteredArgs], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

#!/usr/bin/env node
import {execSync} from 'child_process';
import fs from 'fs';
import path from 'path';

if (process.argv.length < 3) {
  console.log('Name your app');
  console.log('For example :');
  console.log('    npx create-tmtyl TakeMeToYourLeader');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/MoneyTreesIsThePerfectPlaceForShade/untitled-unmastered.git';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(`Choose another name, cuz ${projectName} is already exists`);
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log('Processing...');

    process.chdir(projectPath);
    execSync(`git clone --depth 1 ${git_repo}`);

    fs.rmSync(`${projectPath}\\untitled-unmastered\\bin`, {recursive: true, force: true});

    console.log('Now type "npm i" to install deps');

    console.log('The installation is done, create your own world!');
  } catch (error) {
    console.log(error);
  }
}
main();

#!/usr/bin/env node
import {execSync} from 'child_process';
import path from 'path';
import fs from 'fs';

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
    console.log('Downloading files...');

    process.chdir(projectPath);
    execSync(`git clone --depth 1 ${git_repo}`);

    console.log('Installing dependencies...');
    execSync('npm install');

    fs.rmSync('./bin')

    console.log('The installation is done, this is ready to use !');
  } catch (error) {
    console.log(error);
  }
}
main();

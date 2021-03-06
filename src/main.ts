import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import { promisify } from 'util';
import path from 'path';
import os from 'os';
interface IOptions {
  template: string;
  templateDirectory?: string;
  targetDirectory?: string;
}
const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options: IOptions) {
  return copy(options.templateDirectory!, options.targetDirectory!, {
    clobber: false,
  });
}

export async function createProject(options: IOptions) {
  options = {
    ...options,
    targetDirectory: process.cwd(),
  };
  let rootDirectory: string;
  if (__dirname.includes('dist')) {
    rootDirectory = __dirname.split('dist')[0];
  }
  if (os.platform() === 'win32') {
    options.templateDirectory = path.join(
      (rootDirectory! + 'templates' + '/' + options.template).replace(
        /\//g,
        '\\'
      )
    );
  } else {
    options.templateDirectory =
      rootDirectory! + 'templates' + '/' + options.template;
  }
  try {
    await access(options.templateDirectory!, fs.constants.R_OK);
  } catch (err) {
    console.error('%s Invalid template name', chalk.red.bold('ERROR'));
    process.exit(1);
  }

  console.log('Copying README file');
  await copyTemplateFiles(options);

  console.log('%s template ready', chalk.green.bold('DONE'));
  return true;
}

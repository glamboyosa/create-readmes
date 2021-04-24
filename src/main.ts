import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import { promisify } from 'util';
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

  options.templateDirectory = (
    process.cwd() +
    `${'/'}` +
    'templates' +
    '/' +
    options.template
  ).replace(/\//g, '\\');

  console.log((
    process.cwd() +
    `${'/'}` +
    'templates' +
    '/' +
    options.template
  ).replace(/\//g, '\\'))
  try {
    await access(options.templateDirectory, fs.constants.R_OK);
  } catch (err) {
    console.error('%s Invalid template name', chalk.red.bold('ERROR'));
    process.exit(1);
  }

  console.log('Copy project files');
  await copyTemplateFiles(options);

  console.log('%s Project ready', chalk.green.bold('DONE'));
  return true;
}

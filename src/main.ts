import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
type options = { template: string; [key: string]: any };
const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options: options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProject(options: options) {
  options = {
    ...options,
    targetDirectory: process.cwd(),
  };

  const currentFileUrl = __dirname;
  // basically creates an absolute path from main.ts to ../../templates/{options.templateDirectory}
  console.log('current file URL Is:', currentFileUrl);
  console.log(new URL(currentFileUrl).pathname);
  // should very simply be able to go `../../templates/{options.templates}
  const templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    '../../templates',
    options.template
  );
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error('%s Invalid template name', chalk.red.bold('ERROR'));
    process.exit(1);
  }

  console.log('Copy project files');
  await copyTemplateFiles(options);

  console.log('%s Project ready', chalk.green.bold('DONE'));
  return true;
}

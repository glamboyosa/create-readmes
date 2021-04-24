// CLI Code lives here
import inquirer from 'inquirer';
const promptForOptions = async () => {
  const questions = [
    {
      type: 'list',
      name: 'template',
      message: 'Please choose a README template',
      choices: ['Basic-Client', 'Third-Party-Client', 'Third-Party-Server'],
      default: 'Basic-Client',
    },
  ];
  // prompt user for response
  const answers = await inquirer.prompt(questions);
  return {
    template: answers.template as string,
  };
};
export async function cli(args: string[]) {
  console.log(args);
  const usersOptions = await promptForOptions();
  console.log(usersOptions);
}

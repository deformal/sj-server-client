#!/usr/bin/env node

const { execSync } = require("child_process")
const runCommand = (command) => {
  try
  {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err)
  {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
};
const reppoName = process.argv[2];
const gitCheckOut = `git clone  https://github.com/deformal/sj-server-client.git ${reppoName}`;
const deleteBin = `cd ${reppoName} && rm -rf bin`
const installDepsCommand = `cd ${reppoName}/client && yarn`;
const installDepsCommand2 = `cd ${reppoName}/server && yarn`;
const deletingGitRepo = `rm -rf .git`
console.log(`Cloning the repository with name ${reppoName}`);
const checkOut = runCommand(gitCheckOut);
if (!checkOut) process.exit(-1);
const deleteWorkflowDir = runCommand("rm -rf .git/*")
if (!deleteWorkflowDir)
{
  console.error("Problem while generating template")
  process.exit(-1)
}
console.log(`Installing dependencies for ${reppoName}}`);
const deleteGit = runCommand(deletingGitRepo);
const installedDeps = runCommand(installDepsCommand);
const installedDeps2 = runCommand(installDepsCommand2);
const deleteBins = runCommand(deleteBin)

if (!deleteGit) process.exit(-1)
if (!deleteBins) process.exit(-1)
if (!installedDeps) process.exit(-1)
if (!installedDeps2) process.exit(-1)

console.log('Thank you for using sj-server-client, template. Happy coding 🚀');
console.log(`cd ${reppoName}/client && yarn`);
console.log(`cd ${reppoName}/server && yarn or npm i `);

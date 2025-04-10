import fs from 'fs';
import path from 'path';
import { program, Command } from './program';

export const root = process.cwd();

export const clearWorkspace = () => {
  const files = ['submodules', 'packages', 'pnpm-workspace.yaml', 'turbo.json'];
  for (const file of files) {
    fs.rmSync(path.join(root, file), { recursive: true, force: true });
  }
};
program.addCommand(new Command('clear').action(clearWorkspace));

program.parse(process.argv);

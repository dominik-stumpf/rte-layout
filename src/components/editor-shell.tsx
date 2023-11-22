import { Editor } from './editor';
import { Statusbar } from './statusbar';
import { Toolbar } from './toolbar';

export function EditorShell() {
  return (
    <main className="border max-w-[100ch] w-full h-full max-h-[42rem] flex flex-col font-sans-serif min-w-0">
      <Toolbar />
      <Editor />
      <Statusbar />
    </main>
  );
}

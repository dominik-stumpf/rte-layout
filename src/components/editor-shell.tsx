import { Editor } from './editor';
import { Statusbar } from './statusbar';
import { Toolbar } from './toolbar';

export function EditorShell() {
  return (
    <main className="flex h-full max-h-[42rem] w-full min-w-0 max-w-[100ch] flex-col border font-sans-serif">
      <Toolbar />
      <Editor />
      <Statusbar />
    </main>
  );
}

import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen min-h-screen grid place-items-center p-4">
        <main className="border max-w-[100ch] w-full h-full max-h-[42rem] flex flex-col font-sans-serif">
          <Toolbar />
          <Editor />
          <Statusline />
        </main>
      </div>
    </ThemeProvider>
  );
}

export function Toolbar() {
  return <div className="border border-b-2 px-4">toolbar</div>;
}

export function Editor() {
  return (
    <div className="grow p-4 prose lg:prose-lg dark:prose-invert">
      <h2>your regular text editor</h2>
      <p>with a ready-to-go typographic setting :)</p>
    </div>
  );
}

export function Statusline() {
  const words = 14;
  const characters = 238;

  return (
    <div className="border border-t-2 text-right text-muted bg-muted-foreground px-4">
      Words: {words} Characters: {characters}
    </div>
  );
}

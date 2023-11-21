import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen min-h-screen grid place-items-center p-4">
        <main className="border max-w-[85ch] w-full h-full max-h-[32rem] flex flex-col">
          <Toolbar/>
          <Editor/>
          <Statusline/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export function Editor() {
  return <div>editor</div>;
}

export function Toolbar() {
  return <div>toolbar</div>;
}

export function Statusline() {
  return <div>toolbar</div>;
}

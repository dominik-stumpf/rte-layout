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

export function Editor() {
  return <div>editor</div>;
}

export function Toolbar() {
  return <div>toolbar</div>;
}

export function Statusline() {
  return <div>toolbar</div>;
}

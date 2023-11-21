import { Editor } from '@/components/editor';
import { Statusbar } from '@/components/statusbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toolbar } from '@/components/toolbar';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen min-h-screen grid place-items-center p-4">
        <main className="border max-w-[100ch] w-full h-full max-h-[42rem] flex flex-col font-sans-serif">
          <Toolbar />
          <Editor />
          <Statusbar />
        </main>
      </div>
    </ThemeProvider>
  );
}

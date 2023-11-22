import { EditorShell } from '@/components/editor-shell';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <div className="w-screen min-h-screen grid place-items-center p-4 antialiased">
          <EditorShell />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

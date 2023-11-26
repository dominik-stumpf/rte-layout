export function Kbd({ children }: { children: string }) {
  return (
    <kbd className="text-muted-foreground font-mono capitalize">{children}</kbd>
  );
}

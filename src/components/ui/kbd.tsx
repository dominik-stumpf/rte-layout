export function Kbd({ children }: { children: string }) {
  return (
    <kbd className="font-mono capitalize text-muted-foreground">{children}</kbd>
  );
}

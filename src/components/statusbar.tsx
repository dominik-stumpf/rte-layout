export function Statusbar() {
  const words = 14;
  const characters = 238;

  return (
    <div className="border border-t-2 bg-card px-4 py-2 text-right text-card-foreground">
      Words: {words} Characters: {characters}
    </div>
  );
}

import { History } from '@/components/toolbar-actions/history';
import { TextAlignment } from '@/components/toolbar-actions/text-alignment';
import { TextFormat } from '@/components/toolbar-actions/text-format';
import { TextStyle } from '@/components/toolbar-actions/text-style';
import { Separator } from '@/components/ui/separator';

export function Toolbar() {
  return (
    <div className="flex gap-2 overflow-auto border border-b-2 bg-card px-1 py-1 text-card-foreground">
      <History />
      <Separator orientation="vertical" />
      <TextFormat />
      <Separator orientation="vertical" />
      <TextAlignment />
      <Separator orientation="vertical" />
      <TextStyle />
    </div>
  );
}

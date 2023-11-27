import { History } from '@/components/toolbar-actions/history';
import { TextAlignment } from '@/components/toolbar-actions/text-alignment';
import { TextFormat } from '@/components/toolbar-actions/text-format';
import { TextStyle } from '@/components/toolbar-actions/text-style';
import { Separator } from '@/components/ui/separator';

export function Toolbar() {
  return (
    <div className="border border-b-2 px-1 py-1 flex gap-2 bg-card text-card-foreground overflow-auto">
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

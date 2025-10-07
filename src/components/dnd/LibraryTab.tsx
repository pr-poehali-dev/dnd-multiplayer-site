import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Spell } from './types';

interface LibraryTabProps {
  spells: Spell[];
}

const LibraryTab = ({ spells }: LibraryTabProps) => {
  return (
    <div className="animate-fade-in">
      <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-cinzel text-3xl flex items-center gap-3">
            <Icon name="BookOpen" className="h-8 w-8 text-primary animate-magical-pulse" />
            Библиотека заклинаний
          </CardTitle>
          <CardDescription className="font-fell">Изучите древние тайны магии</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {spells.map((spell) => (
              <Card key={spell.id} className="border-2 border-primary/20 hover:border-primary/60 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Sparkles" className="h-5 w-5 text-primary" />
                        {spell.name}
                      </CardTitle>
                      <CardDescription className="font-fell mt-1">
                        {spell.school} • {spell.level} уровень
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="font-cinzel">
                      {spell.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground font-fell">Время:</p>
                      <p className="font-cinzel">{spell.castingTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-fell">Дистанция:</p>
                      <p className="font-cinzel">{spell.range}</p>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-sm font-fell">{spell.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryTab;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Character } from './types';

interface CharactersTabProps {
  characters: Character[];
}

const CharactersTab = ({ characters }: CharactersTabProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-cinzel font-bold">Мои персонажи</h2>
        <Button className="bg-primary hover:bg-primary/90 font-cinzel">
          <Icon name="UserPlus" className="mr-2 h-4 w-4" />
          Создать персонажа
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {characters.map((char) => (
          <Card key={char.id} className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="User" className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="font-cinzel text-2xl">{char.name}</CardTitle>
                  <CardDescription className="font-fell">{char.race} {char.class}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-fell">Уровень:</span>
                <span className="font-cinzel font-bold">{char.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-fell">Мировоззрение:</span>
                <span className="font-cinzel text-sm">{char.alignment}</span>
              </div>
              <Separator />
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-fell">Здоровье:</span>
                  <span className="font-cinzel font-bold">{char.hp}/{char.maxHp}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-border">
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all"
                    style={{ width: `${(char.hp / char.maxHp) * 100}%` }}
                  />
                </div>
              </div>
              <Button className="w-full font-cinzel mt-4" variant="outline">
                Подробнее
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CharactersTab;

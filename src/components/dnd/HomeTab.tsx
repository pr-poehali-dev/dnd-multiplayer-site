import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { GameRoom } from './types';
import DiceRoller from './DiceRoller';

interface HomeTabProps {
  gameRooms: GameRoom[];
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
  onNavigate: (tab: string) => void;
}

const HomeTab = ({ gameRooms, getStatusColor, getStatusText, onNavigate }: HomeTabProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:scale-105">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Dice6" className="h-10 w-10 text-primary" />
              <CardTitle className="font-cinzel text-2xl">Быстрая игра</CardTitle>
            </div>
            <CardDescription className="font-fell">Присоединитесь к открытой комнате или создайте свою</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-cinzel" 
              size="lg"
              onClick={() => onNavigate('rooms')}
            >
              Найти игру
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:scale-105">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="UserPlus" className="h-10 w-10 text-primary" />
              <CardTitle className="font-cinzel text-2xl">Создать героя</CardTitle>
            </div>
            <CardDescription className="font-fell">Создайте нового персонажа для приключений</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cinzel" 
              size="lg"
              onClick={() => onNavigate('characters')}
            >
              Новый персонаж
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:scale-105">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Wand2" className="h-10 w-10 text-primary" />
              <CardTitle className="font-cinzel text-2xl">Магия и заклинания</CardTitle>
            </div>
            <CardDescription className="font-fell">Изучите библиотеку заклинаний и магических предметов</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-cinzel" 
              size="lg"
              onClick={() => onNavigate('library')}
            >
              Открыть библиотеку
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-cinzel text-3xl text-center">Активные игры</CardTitle>
          <CardDescription className="font-fell text-center">Присоединяйтесь к приключениям других игроков</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {gameRooms.slice(0, 2).map((room) => (
              <Card key={room.id} className="border border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-cinzel text-xl">{room.name}</CardTitle>
                    <Badge className={getStatusColor(room.status)}>
                      {getStatusText(room.status)}
                    </Badge>
                  </div>
                  <CardDescription className="font-fell">{room.campaign}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Users" className="h-4 w-4" />
                      <span>{room.players}/{room.maxPlayers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" className="h-4 w-4" />
                      <span>Уровень {room.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <DiceRoller />
      </div>
    </div>
  );
};

export default HomeTab;
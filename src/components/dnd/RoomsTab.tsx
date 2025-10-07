import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { GameRoom } from './types';

interface RoomsTabProps {
  gameRooms: GameRoom[];
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

const RoomsTab = ({ gameRooms, getStatusColor, getStatusText }: RoomsTabProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-cinzel font-bold">Игровые комнаты</h2>
        <Button className="bg-primary hover:bg-primary/90 font-cinzel">
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          Создать комнату
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {gameRooms.map((room) => (
          <Card key={room.id} className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-[1.02]">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-cinzel text-2xl mb-2">{room.name}</CardTitle>
                  <CardDescription className="font-fell text-base">{room.campaign}</CardDescription>
                </div>
                <Badge className={getStatusColor(room.status)}>
                  {getStatusText(room.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                    <span className="font-fell">Игроки:</span>
                  </div>
                  <span className="font-cinzel font-bold">{room.players}/{room.maxPlayers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" className="h-5 w-5 text-primary" />
                    <span className="font-fell">Уровень:</span>
                  </div>
                  <span className="font-cinzel font-bold">{room.level}</span>
                </div>
                <Separator />
                <Button 
                  className="w-full font-cinzel" 
                  disabled={room.status === 'full'}
                  variant={room.status === 'active' ? 'default' : 'secondary'}
                >
                  {room.status === 'full' ? 'Комната заполнена' : 'Присоединиться'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomsTab;

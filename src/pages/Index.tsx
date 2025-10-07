import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { GameRoom, Character, Spell } from '@/components/dnd/types';
import HomeTab from '@/components/dnd/HomeTab';
import RoomsTab from '@/components/dnd/RoomsTab';
import CharactersTab from '@/components/dnd/CharactersTab';
import RulesTab from '@/components/dnd/RulesTab';
import CampaignsTab from '@/components/dnd/CampaignsTab';
import ProfileTab from '@/components/dnd/ProfileTab';
import LibraryTab from '@/components/dnd/LibraryTab';
import ForumTab from '@/components/dnd/ForumTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const gameRooms: GameRoom[] = [
    { id: 1, name: 'Логово Дракона', campaign: 'Затерянная шахта Фандельвера', players: 3, maxPlayers: 5, level: '1-5', status: 'active' },
    { id: 2, name: 'Таверна у развилки', campaign: 'Проклятие Страда', players: 4, maxPlayers: 6, level: '3-8', status: 'waiting' },
    { id: 3, name: 'Гильдия искателей', campaign: 'Водный Глубь', players: 5, maxPlayers: 5, level: '5-10', status: 'full' },
    { id: 4, name: 'Подземелье забытых', campaign: 'Гробница Аннигиляции', players: 2, maxPlayers: 4, level: '1-11', status: 'waiting' },
  ];

  const characters: Character[] = [
    { id: 1, name: 'Торин Молотобоец', class: 'Воин', level: 5, race: 'Дварф', alignment: 'Законопослушный добрый', hp: 45, maxHp: 50 },
    { id: 2, name: 'Элара Лунный свет', class: 'Волшебник', level: 4, race: 'Эльф', alignment: 'Нейтральный добрый', hp: 28, maxHp: 28 },
    { id: 3, name: 'Коготь теней', class: 'Плут', level: 6, race: 'Полуэльф', alignment: 'Хаотичный нейтральный', hp: 38, maxHp: 42 },
  ];

  const spells: Spell[] = [
    { id: 1, name: 'Огненный шар', level: 3, school: 'Воплощение', castingTime: '1 действие', range: '150 футов', description: 'Яркая полоса света вылетает из вашего указательного пальца к выбранной вами точке в пределах дистанции, где взрывается всполохом пламени.' },
    { id: 2, name: 'Волшебная стрела', level: 1, school: 'Воплощение', castingTime: '1 действие', range: '120 футов', description: 'Вы создаёте три светящихся дротика из магической силы. Каждый дротик попадает в существо на ваш выбор, которое вы видите в пределах дистанции.' },
    { id: 3, name: 'Щит', level: 1, school: 'Ограждение', castingTime: '1 реакция', range: 'На себя', description: 'Невидимый барьер из магической силы появляется и защищает вас.' },
    { id: 4, name: 'Лечащее слово', level: 1, school: 'Воплощение', castingTime: '1 бонусное действие', range: '60 футов', description: 'Существо на ваш выбор, которое вы видите в пределах дистанции, восстанавливает хиты.' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-700 text-white hover:bg-green-800';
      case 'waiting':
        return 'bg-amber-700 text-white hover:bg-amber-800';
      case 'full':
        return 'bg-red-700 text-white hover:bg-red-800';
      default:
        return 'bg-gray-700 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Идёт игра';
      case 'waiting':
        return 'Ожидание';
      case 'full':
        return 'Полная';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted parchment-texture">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-magical-pulse" />
            <h1 className="relative text-6xl md:text-7xl font-cinzel font-bold text-foreground mb-4 magical-glow">
              Dragons & Dungeons
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-fell italic max-w-2xl mx-auto">
            Окунитесь в мир магии и приключений. Создавайте легендарных героев, исследуйте таинственные подземелья и сражайтесь с могущественными драконами.
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 flex justify-center">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-lg p-2 border-2 border-primary/30 shadow-xl">
              <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 bg-transparent">
                <TabsTrigger value="home" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Home" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Главная</span>
                </TabsTrigger>
                <TabsTrigger value="rooms" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Users" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Комнаты</span>
                </TabsTrigger>
                <TabsTrigger value="characters" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Sword" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Персонажи</span>
                </TabsTrigger>
                <TabsTrigger value="rules" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Правила</span>
                </TabsTrigger>
                <TabsTrigger value="campaigns" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Map" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Кампании</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="User" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Профиль</span>
                </TabsTrigger>
                <TabsTrigger value="library" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Библиотека</span>
                </TabsTrigger>
                <TabsTrigger value="forum" className="font-cinzel data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Форум</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="home">
            <HomeTab 
              gameRooms={gameRooms} 
              getStatusColor={getStatusColor} 
              getStatusText={getStatusText} 
            />
          </TabsContent>

          <TabsContent value="rooms">
            <RoomsTab 
              gameRooms={gameRooms} 
              getStatusColor={getStatusColor} 
              getStatusText={getStatusText} 
            />
          </TabsContent>

          <TabsContent value="characters">
            <CharactersTab characters={characters} />
          </TabsContent>

          <TabsContent value="rules">
            <RulesTab />
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignsTab />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab characters={characters} />
          </TabsContent>

          <TabsContent value="library">
            <LibraryTab spells={spells} />
          </TabsContent>

          <TabsContent value="forum">
            <ForumTab />
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-muted-foreground font-fell">
          <Separator className="mb-6" />
          <p className="mb-2">© 2024 Dragons & Dungeons • Платформа для игры в D&D</p>
          <p className="text-sm">Присоединяйтесь к приключениям и создавайте легенды вместе с нами 🎲✨</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

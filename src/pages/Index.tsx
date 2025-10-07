import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface GameRoom {
  id: number;
  name: string;
  campaign: string;
  players: number;
  maxPlayers: number;
  level: string;
  status: 'active' | 'waiting' | 'full';
}

interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
  race: string;
  alignment: string;
  hp: number;
  maxHp: number;
}

interface Spell {
  id: number;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  description: string;
}

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

          <TabsContent value="home" className="animate-fade-in">
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-cinzel" size="lg">
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
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cinzel" size="lg">
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
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-cinzel" size="lg">
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
          </TabsContent>

          <TabsContent value="rooms" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="characters" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="rules" className="animate-fade-in">
            <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cinzel text-3xl">Правила игры</CardTitle>
                <CardDescription className="font-fell">Основные правила Dungeons & Dragons 5-й редакции</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6 font-fell">
                    <section>
                      <h3 className="text-2xl font-cinzel font-bold mb-3 text-primary">Броски кубиков</h3>
                      <p className="mb-3">
                        В D&D используются различные многогранные кубики, обозначаемые как d4, d6, d8, d10, d12 и d20. 
                        Число после "d" указывает количество граней. Например, d20 — это двадцатигранный кубик.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border">
                        <p className="font-cinzel">Основное правило: d20 + модификатор ≥ Сложность проверки (DC)</p>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-cinzel font-bold mb-3 text-primary">Характеристики персонажа</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li><strong>Сила (STR)</strong> — физическая мощь и атлетизм</li>
                        <li><strong>Ловкость (DEX)</strong> — проворство и скорость реакции</li>
                        <li><strong>Телосложение (CON)</strong> — выносливость и здоровье</li>
                        <li><strong>Интеллект (INT)</strong> — логика и память</li>
                        <li><strong>Мудрость (WIS)</strong> — восприятие и интуиция</li>
                        <li><strong>Харизма (CHA)</strong> — личность и влияние на других</li>
                      </ul>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-cinzel font-bold mb-3 text-primary">Боевые действия</h3>
                      <p className="mb-3">Во время боя каждый персонаж может совершить:</p>
                      <ul className="space-y-2 list-disc list-inside">
                        <li><strong>Действие</strong> — атака, заклинание, рывок, отход, помощь, использование предмета</li>
                        <li><strong>Бонусное действие</strong> — если у вас есть способность, требующая бонусного действия</li>
                        <li><strong>Движение</strong> — перемещение на расстояние, равное вашей скорости</li>
                        <li><strong>Реакция</strong> — провоцированная атака или другая реакция (1 раз за раунд)</li>
                      </ul>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-cinzel font-bold mb-3 text-primary">Магия и заклинания</h3>
                      <p className="mb-3">
                        Заклинатели используют ячейки заклинаний для сотворения магии. Уровень ячейки определяет 
                        мощность заклинания. После использования ячейка расходуется и восстанавливается после отдыха.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border">
                        <p className="font-cinzel mb-2">Типы магических школ:</p>
                        <p>Воплощение, Преобразование, Иллюзия, Прорицание, Некромантия, Ограждение, Очарование, Вызов</p>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-cinzel font-bold mb-3 text-primary">Отдых</h3>
                      <p className="mb-2"><strong>Короткий отдых</strong> — как минимум 1 час. Можно потратить кости хитов для восстановления здоровья.</p>
                      <p><strong>Длинный отдых</strong> — как минимум 8 часов. Восстанавливает все хиты, половину костей хитов и ячейки заклинаний.</p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="animate-fade-in">
            <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cinzel text-3xl">Кампании и приключения</CardTitle>
                <CardDescription className="font-fell">Эпические истории ждут своих героев</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Sword" className="h-6 w-6 text-primary" />
                        Затерянная шахта Фандельвера
                      </CardTitle>
                      <CardDescription className="font-fell">Классическое приключение для новичков</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4 font-fell">
                        Город Фандалин нуждается в героях. Исследуйте руины, сражайтесь с гоблинами и раскройте 
                        тайну потерянной шахты.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge>Уровень 1-5</Badge>
                        <Badge variant="outline">Новичкам</Badge>
                      </div>
                      <Button className="w-full font-cinzel">Начать кампанию</Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Castle" className="h-6 w-6 text-primary" />
                        Проклятие Страда
                      </CardTitle>
                      <CardDescription className="font-fell">Готический хоррор в землях Баровии</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4 font-fell">
                        Туманы затягивают вас в мрачную землю Баровию, где правит вампир Страд фон Зарович. 
                        Сможете ли вы вырваться из его владений?
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge>Уровень 1-10</Badge>
                        <Badge variant="outline">Хоррор</Badge>
                      </div>
                      <Button className="w-full font-cinzel">Начать кампанию</Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Waves" className="h-6 w-6 text-primary" />
                        Водный Глубь: Логово дракона
                      </CardTitle>
                      <CardDescription className="font-fell">Городские интриги и подземные тайны</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4 font-fell">
                        В величайшем городе Побережья Меча назревает заговор. Исследуйте улицы Водного Глубя 
                        и раскройте секреты, скрытые глубоко под землёй.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge>Уровень 5-20</Badge>
                        <Badge variant="outline">Городские</Badge>
                      </div>
                      <Button className="w-full font-cinzel">Начать кампанию</Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Skull" className="h-6 w-6 text-primary" />
                        Гробница Аннигиляции
                      </CardTitle>
                      <CardDescription className="font-fell">Смертельные ловушки джунглей Чульта</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4 font-fell">
                        Таинственное проклятие убивает всех, кто когда-либо был воскрешён. Отправляйтесь в 
                        опасные джунгли, чтобы найти источник зла.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge>Уровень 1-11</Badge>
                        <Badge variant="outline">Сложно</Badge>
                      </div>
                      <Button className="w-full font-cinzel">Начать кампанию</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cinzel text-3xl">Профиль игрока</CardTitle>
                <CardDescription className="font-fell">Ваша история приключений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center border-4 border-primary/50">
                      <Icon name="User" className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-cinzel font-bold">Искатель приключений</h3>
                      <p className="text-muted-foreground font-fell">Мастер подземелий с 2024 года</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="font-cinzel text-lg flex items-center gap-2">
                          <Icon name="Users" className="h-5 w-5 text-primary" />
                          Игры
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-cinzel font-bold text-primary">47</p>
                        <p className="text-sm text-muted-foreground font-fell">Сыграно сессий</p>
                      </CardContent>
                    </Card>

                    <Card className="border border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="font-cinzel text-lg flex items-center gap-2">
                          <Icon name="Sword" className="h-5 w-5 text-primary" />
                          Персонажи
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-cinzel font-bold text-primary">{characters.length}</p>
                        <p className="text-sm text-muted-foreground font-fell">Активных героев</p>
                      </CardContent>
                    </Card>

                    <Card className="border border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="font-cinzel text-lg flex items-center gap-2">
                          <Icon name="Trophy" className="h-5 w-5 text-primary" />
                          Достижения
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-cinzel font-bold text-primary">12</p>
                        <p className="text-sm text-muted-foreground font-fell">Заработано</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-cinzel text-xl font-bold mb-4">Последние достижения</h4>
                    <div className="space-y-3">
                      {[
                        { icon: 'Sword', title: 'Убийца драконов', desc: 'Победите древнего дракона' },
                        { icon: 'Shield', title: 'Несокрушимый', desc: 'Выживите с 1 HP в бою' },
                        { icon: 'Crown', title: 'Герой города', desc: 'Завершите кампанию "Водный Глубь"' },
                      ].map((achievement, i) => (
                        <Card key={i} className="border border-border hover:border-primary/50 transition-colors">
                          <CardContent className="flex items-center gap-4 p-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                              <Icon name={achievement.icon as any} className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-cinzel font-bold">{achievement.title}</p>
                              <p className="text-sm text-muted-foreground font-fell">{achievement.desc}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="forum" className="animate-fade-in">
            <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cinzel text-3xl">Форум сообщества</CardTitle>
                <CardDescription className="font-fell">Обсуждайте игры, делитесь историями и находите единомышленников</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Как создать запоминающегося персонажа?', author: 'Эльдрим Мудрый', replies: 23, time: '2 часа назад', hot: true },
                    { title: 'Ищу группу для Проклятия Страда', author: 'Темный следопыт', replies: 8, time: '5 часов назад', hot: false },
                    { title: 'Лучшие билды для волшебника 5 уровня', author: 'Магистр Арканум', replies: 45, time: '1 день назад', hot: true },
                    { title: 'Где найти карты для Водного Глубя?', author: 'Картограф', replies: 12, time: '2 дня назад', hot: false },
                    { title: 'Советы для начинающих ДМов', author: 'Мастер Подземелий', replies: 67, time: '3 дня назад', hot: true },
                  ].map((topic, i) => (
                    <Card key={i} className="border border-border hover:border-primary/50 transition-all hover:scale-[1.01] cursor-pointer">
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon name="MessageSquare" className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-cinzel font-bold">{topic.title}</h4>
                              {topic.hot && (
                                <Badge variant="destructive" className="text-xs">
                                  <Icon name="Flame" className="h-3 w-3 mr-1" />
                                  Hot
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground font-fell">
                              Автор: {topic.author} • {topic.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="MessageCircle" className="h-4 w-4" />
                          <span className="font-cinzel font-bold">{topic.replies}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="w-full mt-6 font-cinzel" size="lg">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Создать новую тему
                </Button>
              </CardContent>
            </Card>
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

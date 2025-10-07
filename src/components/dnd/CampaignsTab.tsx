import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CampaignsTab = () => {
  return (
    <div className="animate-fade-in">
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
    </div>
  );
};

export default CampaignsTab;

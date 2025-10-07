import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ForumTab = () => {
  return (
    <div className="animate-fade-in">
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
    </div>
  );
};

export default ForumTab;

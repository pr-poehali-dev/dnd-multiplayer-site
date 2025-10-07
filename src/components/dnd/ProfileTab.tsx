import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Character } from './types';

interface ProfileTabProps {
  characters: Character[];
}

const ProfileTab = ({ characters }: ProfileTabProps) => {
  return (
    <div className="animate-fade-in">
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
    </div>
  );
};

export default ProfileTab;

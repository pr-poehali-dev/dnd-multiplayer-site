import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const RulesTab = () => {
  return (
    <div className="animate-fade-in">
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
    </div>
  );
};

export default RulesTab;

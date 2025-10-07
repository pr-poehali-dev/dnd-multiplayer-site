import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface CharacterCreatorProps {
  onClose: () => void;
  onSave: (character: any) => void;
}

const CharacterCreator = ({ onClose, onSave }: CharacterCreatorProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [alignment, setAlignment] = useState('');
  const [stats, setStats] = useState<CharacterStats>({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const races = ['Человек', 'Эльф', 'Дварф', 'Полурослик', 'Полуэльф', 'Полуорк', 'Тифлинг', 'Драконорождённый'];
  const classes = ['Воин', 'Волшебник', 'Плут', 'Жрец', 'Варвар', 'Бард', 'Друид', 'Монах', 'Паладин', 'Следопыт', 'Чародей', 'Колдун'];
  const alignments = [
    'Законопослушный добрый',
    'Нейтральный добрый',
    'Хаотичный добрый',
    'Законопослушный нейтральный',
    'Истинно нейтральный',
    'Хаотичный нейтральный',
    'Законопослушный злой',
    'Нейтральный злой',
    'Хаотичный злой',
  ];

  const getModifier = (stat: number) => {
    return Math.floor((stat - 10) / 2);
  };

  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const calculateHP = () => {
    const baseHP: Record<string, number> = {
      'Воин': 10,
      'Варвар': 12,
      'Волшебник': 6,
      'Жрец': 8,
      'Плут': 8,
      'Бард': 8,
      'Друид': 8,
      'Монах': 8,
      'Паладин': 10,
      'Следопыт': 10,
      'Чародей': 6,
      'Колдун': 8,
    };
    return (baseHP[characterClass] || 8) + getModifier(stats.constitution);
  };

  const handleSave = () => {
    const newCharacter = {
      id: Date.now(),
      name,
      race,
      class: characterClass,
      alignment,
      level: 1,
      hp: calculateHP(),
      maxHp: calculateHP(),
      stats,
    };
    onSave(newCharacter);
    onClose();
  };

  const totalPoints = Object.values(stats).reduce((a, b) => a + b, 0);
  const pointsUsed = totalPoints - 60;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-primary/30 bg-card">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="font-cinzel text-3xl flex items-center gap-2">
                <Icon name="Sparkles" className="h-8 w-8 text-primary animate-magical-pulse" />
                Создание персонажа
              </CardTitle>
              <CardDescription className="font-fell mt-2">Шаг {step} из 3</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-2xl font-cinzel font-bold text-primary">Основная информация</h3>
              
              <div className="space-y-2">
                <Label className="font-fell">Имя персонажа</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя..."
                  className="font-cinzel"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-fell">Раса</Label>
                  <Select value={race} onValueChange={setRace}>
                    <SelectTrigger className="font-cinzel">
                      <SelectValue placeholder="Выберите расу" />
                    </SelectTrigger>
                    <SelectContent>
                      {races.map((r) => (
                        <SelectItem key={r} value={r} className="font-cinzel">
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-fell">Класс</Label>
                  <Select value={characterClass} onValueChange={setCharacterClass}>
                    <SelectTrigger className="font-cinzel">
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((c) => (
                        <SelectItem key={c} value={c} className="font-cinzel">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-fell">Мировоззрение</Label>
                <Select value={alignment} onValueChange={setAlignment}>
                  <SelectTrigger className="font-cinzel">
                    <SelectValue placeholder="Выберите мировоззрение" />
                  </SelectTrigger>
                  <SelectContent>
                    {alignments.map((a) => (
                      <SelectItem key={a} value={a} className="font-cinzel">
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-cinzel font-bold text-primary">Характеристики</h3>
                <Badge variant={pointsUsed <= 27 ? "default" : "destructive"} className="font-cinzel">
                  Очки: {pointsUsed}/27
                </Badge>
              </div>

              <div className="grid gap-4">
                {Object.entries(stats).map(([key, value]) => {
                  const labels: Record<string, string> = {
                    strength: 'Сила',
                    dexterity: 'Ловкость',
                    constitution: 'Телосложение',
                    intelligence: 'Интеллект',
                    wisdom: 'Мудрость',
                    charisma: 'Харизма',
                  };
                  const modifier = getModifier(value);

                  return (
                    <Card key={key} className="border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Label className="font-fell text-lg">{labels[key]}</Label>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className="font-cinzel">
                              {value}
                            </Badge>
                            <Badge variant="secondary" className="font-cinzel">
                              {formatModifier(modifier)}
                            </Badge>
                          </div>
                        </div>
                        <Slider
                          value={[value]}
                          onValueChange={([newValue]) =>
                            setStats({ ...stats, [key]: newValue })
                          }
                          min={8}
                          max={18}
                          step={1}
                          className="mt-2"
                        />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {pointsUsed > 27 && (
                <div className="bg-destructive/10 border border-destructive rounded-lg p-4">
                  <p className="text-destructive font-fell">
                    Вы превысили лимит очков! Уменьшите характеристики.
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-cinzel font-bold text-primary">Подтверждение</h3>

              <Card className="border-2 border-primary/30 bg-muted/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-cinzel font-bold">{name}</h4>
                      <p className="text-muted-foreground font-fell">
                        {race} {characterClass}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground font-fell">Мировоззрение</p>
                      <p className="font-cinzel font-bold">{alignment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-fell">Здоровье</p>
                      <p className="font-cinzel font-bold">{calculateHP()} HP</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(stats).map(([key, value]) => {
                      const labels: Record<string, string> = {
                        strength: 'СИЛ',
                        dexterity: 'ЛОВ',
                        constitution: 'ТЕЛ',
                        intelligence: 'ИНТ',
                        wisdom: 'МДР',
                        charisma: 'ХАР',
                      };
                      return (
                        <div key={key} className="text-center p-2 border border-border rounded">
                          <p className="text-xs text-muted-foreground font-fell">{labels[key]}</p>
                          <p className="text-xl font-cinzel font-bold">{value}</p>
                          <p className="text-sm text-muted-foreground font-cinzel">
                            {formatModifier(getModifier(value))}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <Separator />

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                if (step === 1) {
                  onClose();
                } else {
                  setStep(step - 1);
                }
              }}
              className="font-cinzel"
            >
              <Icon name="ChevronLeft" className="mr-2 h-4 w-4" />
              {step === 1 ? 'Отмена' : 'Назад'}
            </Button>

            <Button
              onClick={() => {
                if (step === 3) {
                  handleSave();
                } else {
                  setStep(step + 1);
                }
              }}
              disabled={
                (step === 1 && (!name || !race || !characterClass || !alignment)) ||
                (step === 2 && pointsUsed > 27)
              }
              className="font-cinzel"
            >
              {step === 3 ? 'Создать персонажа' : 'Далее'}
              {step !== 3 && <Icon name="ChevronRight" className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterCreator;

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DiceRollerProps {
  onRoll?: (result: number, diceType: number) => void;
}

const DiceRoller = ({ onRoll }: DiceRollerProps) => {
  const [rolling, setRolling] = useState(false);
  const [lastRoll, setLastRoll] = useState<{ dice: number; result: number } | null>(null);
  const [history, setHistory] = useState<{ dice: number; result: number; time: string }[]>([]);

  const diceTypes = [4, 6, 8, 10, 12, 20];

  const rollDice = (sides: number) => {
    setRolling(true);
    
    setTimeout(() => {
      const result = Math.floor(Math.random() * sides) + 1;
      const now = new Date().toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      
      setLastRoll({ dice: sides, result });
      setHistory([{ dice: sides, result, time: now }, ...history.slice(0, 9)]);
      setRolling(false);
      
      if (onRoll) {
        onRoll(result, sides);
      }
    }, 500);
  };

  const getDiceIcon = (sides: number) => {
    const icons: Record<number, string> = {
      4: 'Dice1',
      6: 'Dice6',
      8: 'Dice2',
      10: 'Dice3',
      12: 'Dice4',
      20: 'Dice5',
    };
    return icons[sides] || 'Dice6';
  };

  const getCriticalStatus = (dice: number, result: number) => {
    if (dice === 20 && result === 20) return 'critical';
    if (dice === 20 && result === 1) return 'fumble';
    return 'normal';
  };

  return (
    <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-cinzel text-2xl flex items-center gap-2">
          <Icon name="Dices" className="h-6 w-6 text-primary" />
          Броски кубиков
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {diceTypes.map((dice) => (
            <Button
              key={dice}
              onClick={() => rollDice(dice)}
              disabled={rolling}
              variant="outline"
              className="h-20 flex flex-col gap-1 font-cinzel border-2 hover:border-primary hover:scale-105 transition-all"
            >
              <Icon name={getDiceIcon(dice) as any} className="h-8 w-8" />
              <span className="text-xs">d{dice}</span>
            </Button>
          ))}
        </div>

        {lastRoll && (
          <Card 
            className={`border-2 ${
              getCriticalStatus(lastRoll.dice, lastRoll.result) === 'critical' 
                ? 'border-green-500 bg-green-500/10' 
                : getCriticalStatus(lastRoll.dice, lastRoll.result) === 'fumble'
                ? 'border-red-500 bg-red-500/10'
                : 'border-primary/30'
            } ${rolling ? 'animate-magical-pulse' : 'animate-fade-in'}`}
          >
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-4">
                <Icon 
                  name={getDiceIcon(lastRoll.dice) as any} 
                  className={`h-16 w-16 ${rolling ? 'animate-spin' : ''}`}
                />
                <div>
                  <p className="text-sm text-muted-foreground font-fell">d{lastRoll.dice}</p>
                  <p className="text-6xl font-cinzel font-bold text-primary">
                    {lastRoll.result}
                  </p>
                  {getCriticalStatus(lastRoll.dice, lastRoll.result) === 'critical' && (
                    <Badge className="mt-2 bg-green-500">Критический успех!</Badge>
                  )}
                  {getCriticalStatus(lastRoll.dice, lastRoll.result) === 'fumble' && (
                    <Badge className="mt-2 bg-red-500">Критический провал!</Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {history.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-sm text-muted-foreground">История бросков</h4>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {history.map((roll, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded border border-border text-sm"
                >
                  <div className="flex items-center gap-2">
                    <Icon name={getDiceIcon(roll.dice) as any} className="h-4 w-4 text-primary" />
                    <span className="font-cinzel">d{roll.dice}</span>
                  </div>
                  <Badge variant="outline" className="font-cinzel">
                    {roll.result}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-fell">{roll.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DiceRoller;

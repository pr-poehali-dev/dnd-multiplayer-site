export interface GameRoom {
  id: number;
  name: string;
  campaign: string;
  players: number;
  maxPlayers: number;
  level: string;
  status: 'active' | 'waiting' | 'full';
}

export interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
  race: string;
  alignment: string;
  hp: number;
  maxHp: number;
}

export interface Spell {
  id: number;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  description: string;
}

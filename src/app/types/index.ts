export interface Contestant {
  id: string;
  name: string;
  color: string;
}

export type AppState = 'idle' | 'spinning' | 'result';

export interface AppContextType {
  contestants: Contestant[];
  currentState: AppState;
  winner: Contestant | null;
  addContestant: (name: string) => void;
  removeContestant: (id: string) => void;
  spinWheel: () => void;
  endSpin: () => void;
  isSpinning: boolean;
} 
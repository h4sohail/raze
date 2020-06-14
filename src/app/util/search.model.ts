export interface Account{
    id: string;
    name: string;
    rank: string;
    wins: number;
    losses: number;
}

export interface Match{
    [index: number]: { kda: string; score: number; win: boolean, rounds_won: number, rounds_lost: number };
}
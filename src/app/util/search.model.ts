export interface Account{
    id: string;
    name: string;
    rank: string;
    wins: number;
    losses: number;
}

export interface Match{
    kda: string;
    score: number;
    win: boolean;
}
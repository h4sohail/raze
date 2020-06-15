import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Account, Match } from '../util/search.model';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
    private account: Account;
    public isJustLaunch: boolean = true;
    private matches: Match[];

    stats$;
    constructor(private searchService: SearchService) {}

    ngOnInit(): void {
        this.stats$ = this.searchService.fetchStats();
        this.searchService.fetchStats().subscribe((res) => {
            this.account = res['account'];
            this.matches = res['matches'];
        });
    }

    fetchStats() {
        this.stats$ = this.searchService.fetchStats();
    }

    getAccountName() {
        return this.account.name;
    }

    getAccountRank() {
        return this.account.rank;
    }

    getAccountWins() {
        return this.account.wins;
    }

    getAccountLosses() {
        return this.account.losses;
    }

    getAccountMatches() {
        return this.matches;
    }

    canShow(index: number): boolean {
        let bCanShow = false;
        if(index == 0 && this.isJustLaunch) {
            bCanShow = true;
            this.isJustLaunch = false;
        }

        return bCanShow;
    }

    math = Math;
}

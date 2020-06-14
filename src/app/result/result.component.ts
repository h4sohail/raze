import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Account } from '../util/search.model';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    private account: Account;
    stats$;
    constructor(private searchService: SearchService) {}

    ngOnInit(): void {
        this.stats$ = this.searchService.fetchStats();
        this.searchService.fetchStats().subscribe((res: Account) => {
            this.account = res;
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
}

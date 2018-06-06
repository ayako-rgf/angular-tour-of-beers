import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    templateUrl: './beers.component.html',
    styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
    beers: Beer[];
    displayedColumns: string[] = ['id', 'name', 'country'];
    constructor(private beerService: BeerService) { }

    ngOnInit() {
        this.getBeers();
    }
    public getBeers(): void {
        this.beerService.getBeers()
            .subscribe(beers => this.beers = beers);
    }
}

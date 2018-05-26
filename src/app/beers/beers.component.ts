import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    templateUrl: './beers.component.html',
    styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
    beers: Beer[];
    constructor(private beerService: BeerService) { }

    ngOnInit() {
        this.getBeers();
    }
    public getBeers(): void {
        this.beerService.getBeers()
            .subscribe(beers => this.beers = beers);
    }
    public add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.beerService.addBeer({ name } as Beer)
            .subscribe(beer => {
                this.beers.push(beer);
            });
    }
    public delete(beer: Beer): void {
        this.beers = this.beers.filter(b => b !== beer);
        this.beerService.deleteBeer(beer).subscribe();
    }
}

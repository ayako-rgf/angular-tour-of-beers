import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    selector: 'app-add-beer',
    templateUrl: './add-beer.component.html',
    styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

    constructor(private beerService: BeerService) { }

    ngOnInit() {
    }
    public add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.beerService.addBeer({ name } as Beer)
            .subscribe(beer => {
                console.log('A new beer added');
                console.log(beer);
            });
    }
}

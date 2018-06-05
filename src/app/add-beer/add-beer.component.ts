import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    selector: 'app-add-beer',
    templateUrl: './add-beer.component.html',
    styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
    public selectedFileName: string;

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
    public getFileName ($event, beerPhotos: any): void {
        if (beerPhotos.length > 0) {
            this.selectedFileName = beerPhotos[0].name;
        }
    }
}

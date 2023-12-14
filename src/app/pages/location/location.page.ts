import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locations: any[] = [];
  params = {} as any;
  constructor(private rickAndMortysvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getLocations();
  }
  getLocations(event?: any){
    this.params.page += 1
    this.rickAndMortysvc.getLocations(this.params).subscribe({
        next: (res: any) => {

          this.locations.push(...res.results)
          if (event) {
            event.target.complete();
          }
        },
        error: (error: any) => {
          if (event) {
            event.target.complete();
          }
        }

    })
  }

}

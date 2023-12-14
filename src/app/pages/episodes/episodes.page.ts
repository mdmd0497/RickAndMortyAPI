import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: any[] = [];
  params = {} as any;
  constructor(private rickAndMortysvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getEpisodes();
  }
  getEpisodes(event?: any){
    this.params.page += 1
    this.rickAndMortysvc.getEpisodes(this.params).subscribe({
        next: (res: any) => {

          this.episodes.push(...res.results)
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

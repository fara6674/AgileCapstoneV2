import { Component, OnInit } from '@angular/core';
import { Dependency } from '../dependency';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Dependency[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
    this.heroService.getAll().subscribe(data => {
      this.heroes = data;
    });
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }


}

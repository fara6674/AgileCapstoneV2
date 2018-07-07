
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dependency } from '../dependency';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Dependency;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.heroService.getHero(id).subscribe((hero: any) => {
          if (hero) {
            this.hero = hero;

          } else {
            console.log(`Hero with id '${id}' not found, returning to list`);
            // this.gotoList();
          }
        });
      }
    });
  }




  goBack(): void {
    this.location.back();
  }
}

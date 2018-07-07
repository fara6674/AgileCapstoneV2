import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Dependency } from './dependency';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeroService {

  DEPENDENCY_API = 'http://localhost:8080/api/';

  API_GET = 'dependencies/';
  API_POST = 'dependency';

  constructor(private messageService: MessageService, private http: HttpClient ) {

  }

  getHeroes(): Observable<Dependency[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getCount(sprintNumber: number) {
    return this.http.get(this.DEPENDENCY_API + this.API_GET + sprintNumber);
  }
  
  
  save(hero: any): Observable<any> {

    console.log("TEST TEST");
    let result: Observable<Object>;
    if (hero['href']) {
      result = this.http.put(hero.href, hero);
    } else {
      result = this.http.post(this.DEPENDENCY_API + this.API_POST, hero);
    }
    return result;
  }


  getAll(): Observable<any> {
    return this.http.get(this.DEPENDENCY_API  + this.API_GET);
  }

  getHero(id: number) {
     return this.http.get(this.DEPENDENCY_API + this.API_GET  + id);

  }
}

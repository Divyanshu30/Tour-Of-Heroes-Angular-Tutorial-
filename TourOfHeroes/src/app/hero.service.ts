import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable} from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): BehaviorSubject<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return new BehaviorSubject<Hero[]>(newFunction());
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
function newFunction(): Hero[] {
    return HEROES;
}


import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iskandar' },
      { id: 12, name: 'Artoria Pendragon' },
      { id: 13, name: 'Gilgamesh' },
      { id: 14, name: 'Cu Chulainn' },
      { id: 15, name: 'Lancelot' },
      { id: 16, name: 'Hercules' },
      { id: 17, name: 'Leonidas' },
      { id: 18, name: 'Medea' },
      { id: 19, name: 'Diarmuid' },
      { id: 20, name: 'Jeanne D\'arc' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
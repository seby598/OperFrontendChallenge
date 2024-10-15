import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private defaultItemCountSubject = new BehaviorSubject<number>(10);
  defaultItemCount$ = this.defaultItemCountSubject.asObservable();

  constructor() {
    const savedItemCount = localStorage.getItem('defaultItemCount');
    if (savedItemCount) {
      this.defaultItemCount = parseInt(savedItemCount, 10);
    }
  }

  get defaultItemCount(): number {
    return this.defaultItemCountSubject.value;
  }

  set defaultItemCount(value: number) {
    this.defaultItemCountSubject.next(value);
    localStorage.setItem('defaultItemCount', value.toString());
  }
}

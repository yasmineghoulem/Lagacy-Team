import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private kickersSource = new BehaviorSubject(new Array());
  currentkickers = this.kickersSource.asObservable();

  constructor() {}

  changekickers(kickers: any) {
    this.kickersSource.next(kickers);
  }
}

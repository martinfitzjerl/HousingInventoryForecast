import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private tennants = new BehaviorSubject<any>(['The initial tennant', 'High risk tennant'])
  tennant = this.tennants.asObservable();

  constructor() { }
    changeTennant(tennant) {
    this.tennants.next(tennant);
  }
}

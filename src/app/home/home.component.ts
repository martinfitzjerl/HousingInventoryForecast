import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('tennants', [
      transition('* => *',[
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75)', offset: 1}),
          ]))
        ]), {optional: true})

      ])
    
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  tennantText: string = 'My first forecast';
  tennants = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.tennant.subscribe(res => this.tennants = res);
    this.itemCount = this.tennants.length;
    this._data.changeTennant(this.tennants);
  }

  addItem() {
    this.tennants.push(this.tennantText);
    this.tennantText = '';
    this.itemCount = this.tennants.length;
    this._data.changeTennant(this.tennants);
  }

  removeItem(i) {
    this.tennants.splice(i, 1);
  }

}

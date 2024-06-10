import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent , DividerComponent , ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    { value: 50, text: 'Status' },
    { value: 200, text: 'Users' },
    { value: 125, text: 'Downloads' },
  ]
  items = [
    { 
      img: "../../../assets/./photos/./IMG-20230822-WA0015.jpg", 
      title: 'me 1',
      description: "my name in an iron shape"
    },
    { 
      img: "../../../assets/./photos/./IMG-20230822-WA0016.jpg", 
      title: 'me 2',
      description: "my name in a blue photo"
    },
  ]
}

import { Component } from '@angular/core';
import { ViewsHomeComponent } from './views-home/views-home.component';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [ViewsHomeComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

}

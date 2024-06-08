import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() paragraph = [1,2,3,4,5];
  
}

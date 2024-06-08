import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Header{
  key : string;
  label: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() headers: Header[] = [];
  @Input() data: any[] = [] ;
  @Input('class') classNames:string = '';
}

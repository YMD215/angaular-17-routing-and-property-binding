import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [TableComponent , TabsComponent ,  DividerComponent, RouterModule],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    {name: "yousef", age: 23 , jop: "engineer" , employed: true},
    {name: "omar", age: 20 , jop: "doctor"},
    {name: "hassan", age: 23 , jop: "firefighter"},
  ];
  header = [
    {key: "name",label: "Name"},
    {key: "age", label: "Age"},
    {key: "jop", label: "Jop"},
  ];
  constructor() {

  }
}

import { Component } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { SegmentComponent } from '../segment/segment.component';
@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [RouterModule , PlaceholderComponent , DividerComponent , SegmentComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {
  
}

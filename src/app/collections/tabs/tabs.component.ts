import { Component } from '@angular/core';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [DividerComponent, RouterLink, RouterLinkActive , RouterModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}

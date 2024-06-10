import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';

@Component({
  selector: 'app-mods',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mods.component.html',
  styleUrl: './mods.component.css'
})
export class ModsComponent {

}

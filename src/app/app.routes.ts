import { Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { ElementsComponent } from './elements/elements.component';

export const routes: Routes = [
    {path: "elements", component: ElementsComponent},
    {path: "collections", component: CollectionsComponent}
];

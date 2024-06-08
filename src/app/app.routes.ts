import { Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { BiographyComponent } from './collections/biography/biography.component';
import { PartnersComponent } from './collections/partners/partners.component';
import { CompaniesComponent } from './collections/companies/companies.component';

export const routes: Routes = [
    {path: "", redirectTo: 'elements', pathMatch: 'full'},
    {path: "home", loadComponent: () => import('./home/home.component').then((h) => h.HomeComponent)},
    {
        path: "elements", loadComponent: () => import('./elements/elements.component').then((e) => e.ElementsComponent),
        children: [
            {path: "", component: ElementsHomeComponent},
        ],
    },
    {   
        path: "collections", loadComponent: () => import('./collections/collections.component').then((c) => c.CollectionsComponent), 
        children: [
            {path: "", component: CollectionsHomeComponent,
                children: [
                    {path: "", component: BiographyComponent},
                    {path: "partners", component: PartnersComponent},
                    {path: "companies", component: CompaniesComponent},
                ]
            },
        ],
    },
    {path: "**", loadComponent: () => import('./not-found/not-found.component').then((n) => n.NotFoundComponent)}
];





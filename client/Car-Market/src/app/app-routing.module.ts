import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { MainComponent } from './main/main.component';
import { CanCreate } from './shared/guards/can.create';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'catalog/create',
    canActivate: [CanCreate],
    component: CreateListingComponent,
  },
  {
    path: 'catalog/:id',
    component: CarDetailsComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

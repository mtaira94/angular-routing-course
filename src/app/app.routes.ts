import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export enum ROUTER_TOKEN {
  HOME = 'home',
  SHOP = 'shop',
  CONTACT = 'contact',
  ABOUT = 'about'
}

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKEN.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTER_TOKEN.HOME,
    component: HomeComponent,
  },
  {
    path: ROUTER_TOKEN.SHOP,
    component: ProductsViewComponent,
  },
  {
    path: ROUTER_TOKEN.CONTACT,
    component: ContactComponent,
  },
  {
    path: ROUTER_TOKEN.ABOUT,
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

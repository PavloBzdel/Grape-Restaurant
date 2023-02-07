import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   {path: '' , component: HomeComponent, pathMatch: 'full'},
   {path: 'home', component: HomeComponent},
   {path: 'about-us', component: AboutUsComponent},
   {path: 'menu', component: MenuComponent},
   {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

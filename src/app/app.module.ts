import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { ExperientsComponent } from './components/experients/experients.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NextDirective } from './derective/next.directive';
import { PrevDirective } from './derective/prev.directive';
import { RecipesComponent } from './components/recipes/recipes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DishesComponent,
    ExperientsComponent,
    ReviewsComponent,
    NextDirective,
    PrevDirective,
    RecipesComponent,
    GalleryComponent,
    FooterComponent,
    AboutUsComponent,
    MenuComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

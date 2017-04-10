import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeroComponent } from './views/landing/hero/hero.component';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesComponent } from './views/services/services.component';
import { SignupComponent } from './views/signup/signup.component';
import { WhoweareComponent } from './views/whoweare/whoweare.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    SignupComponent,
    WhoweareComponent,
    ContactusComponent,
    GalleryComponent,
    NavigationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {ArticlesComponent} from './articles/articles.component'
import {ContactUsComponent} from './contact-us/contact-us.component'
import {GalleryComponent} from './gallery/gallery.component'
import {HomeComponent} from './home/home.component'
import {RegistrationComponent} from './registration/registration.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'Contactus', component: ContactUsComponent},
  { path: '', component: HomeComponent},  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

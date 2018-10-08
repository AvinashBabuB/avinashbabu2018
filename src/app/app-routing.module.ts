import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutpageComponent} from './aboutpage/aboutpage.component'
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: 'about', component: AboutpageComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})
export class AppRoutingModule { }

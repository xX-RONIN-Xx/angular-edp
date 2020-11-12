import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdpAboutComponent } from './edp-about/edp-about.component';
import { EdpComponentsComponent } from './edp-components/edp-components.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: EdpComponentsComponent
  },
  {
    path: 'about',
    component: EdpAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

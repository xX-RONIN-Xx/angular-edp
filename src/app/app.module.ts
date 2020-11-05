import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { FormsModule } from '@angular/forms';
import { EdpAboutComponent } from './edp-about/edp-about.component';
import { EdpComponentsComponent } from './edp-components/edp-components.component';
import { EdpCartComponent } from './edp-cart/edp-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsListComponent,
    EdpAboutComponent,
    EdpComponentsComponent,
    EdpCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

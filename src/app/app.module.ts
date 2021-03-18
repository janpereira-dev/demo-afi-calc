import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './atomic/pages/body/body.component';
import { NavbarComponent } from './atomic/template/navbar/navbar.component';
import { SidebarComponent } from './atomic/template/sidebar/sidebar.component';
import { AdditionComponent } from './atomic/pages/addition/addition.component';
import { SubtractionComponent } from './atomic/pages/subtraction/subtraction.component';
import { MultiplicationComponent } from './atomic/pages/multiplication/multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    SidebarComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '@pages';
import { AdditionComponent } from '@pages';
import { SubtractionComponent } from '@pages';
import { MultiplicationComponent } from '@pages';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: BodyComponent },
  { path: 'sumas', pathMatch: 'full', component: AdditionComponent },
  { path: 'restas', pathMatch: 'full', component: SubtractionComponent },
  { path: 'otras', pathMatch: 'full', component: MultiplicationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

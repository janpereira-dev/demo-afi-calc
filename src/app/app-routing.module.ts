import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '@pages';
import { SumadoraComponent } from '@pages';
import { RestadoraComponent } from '@pages';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: BodyComponent },
  { path: 'sumas', pathMatch: 'full', component: SumadoraComponent },
  { path: 'restas', pathMatch: 'full', component: RestadoraComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

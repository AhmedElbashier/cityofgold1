import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './pages/api/api.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/api' },
  { path: 'api', component: ApiComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

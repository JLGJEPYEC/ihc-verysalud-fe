import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecializacionComponent } from './especializacion.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
    {
        path: '',
        component: EspecializacionComponent,
        children: [
            {
            path: 'dashboard',
            component: DashboardComponent,
            }
          ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecializacionRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from '@modules/dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: "home",
    component: DashboardPageComponent, 
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "**", 
    redirectTo: "", 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

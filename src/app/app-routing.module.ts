import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { DashboardPageComponent } from '@modules/dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  { 
    path: "auth", 
    loadChildren: () => import("@modules/auth/auth.module").then(m => m.AuthModule) 
  },
  {
    path: "",
    component: DashboardPageComponent, 
    loadChildren: () => import("@modules/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [authGuard]
  },
  {
    path: "error",
    loadChildren: () => import("@modules/error/error.module").then(m => m.ErrorModule)
  },
  {
    path: "**", 
    redirectTo: "error/404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
